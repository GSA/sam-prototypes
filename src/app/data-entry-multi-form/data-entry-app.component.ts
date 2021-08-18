import {
  ChangeDetectorRef,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { NavigationLink, NavigationMode } from "@gsa-sam/components";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { GlobalConfig, ToastrService } from "ngx-toastr";
import { DataEntryMultiFormStepsService } from "./data-entry-multi-form-steps.service";
import { Router } from "@angular/router";
import { FormlyUtilsService } from "@gsa-sam/sam-formly";

@Component({
  selector: `app-data-entry-multi`,
  templateUrl: "./data-entry-app.component.html",
  styles: [
    'sam-formly-wrapper-animation div {max-height: none !important }',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class DataEntryAppComponent implements OnInit, OnDestroy {
  @ViewChild("myTemplate", { static: true }) myTemplate: TemplateRef<any>;
  stepperType: boolean = false;
  steps = [
    {
      id: "step1",
      text: "Step 1",
      editable: false,
      children: [
        {
          id: "step1Child1",
          text: "Review Contract",
          editable: true,
          fieldConfig: this.dataEntryFieldService.getReviewContract("step1Child1"),
        },

        {
          id: "step1Child3",
          editable: true,
          text: "Child report details",
          fieldConfig: this.dataEntryFieldService.getReportDetails("step1Child3"),
        },
      ],
    },
    {
      id: "step2Id",
      text: "Report Details",
      editable: true,
      fieldConfig: this.dataEntryFieldService.getReportDetails("step2"),
    },
    {
      id: "step3Id",
      text: "Subawardee Data",
      editable: true,
      fieldConfig: this.dataEntryFieldService.getSubawardeeData("step3"),
    },
    {
      id: 'reviewId',
      text: 'Review and Submit',
      editable: true,
      isReview: true,
      fieldConfig: {
        fieldGroup: [,
          this.dataEntryFieldService.getReviewContract("step1Child1"),
          this.dataEntryFieldService.getReportDetails("step1Child3"),
          this.dataEntryFieldService.getReportDetails("step2"),
          this.dataEntryFieldService.getSubawardeeData("step3", true),
        ]
      }
    }
  ];

  closeUrl = "";

  model: any = {};
  currentStepId: string;
  stepValidityMap: any = {};
  reviewFields: FormlyFieldConfig[];
  isReviewStep = false;
  options: GlobalConfig;
  subpages: NavigationLink[] = [
    {
      text: "Edit",
      id: "edit",
      route: "form",
      queryParams: {},
      mode: NavigationMode.INTERNAL,
      selected: true,
    },
    {
      text: "Review",
      id: "review",
      route: "review",
      queryParams: {},
      mode: NavigationMode.INTERNAL,
      selected: false,
    },
    {
      text: "Preview",
      id: "preview",
      route: "preview",
      queryParams: {},
      mode: NavigationMode.INTERNAL,
      selected: false,
    },
  ];

  @HostListener("window:beforeunload", ["$event"])
  beforeUnloadHandler(event) {
    const data = {
      model: this.model,
      metadata: {
        stepId: this.currentStepId,
        stepValidityMap: this.stepValidityMap,
      },
    };
    this.onSaveClicked(data);
  }
  constructor(
    private dataEntryFieldService: DataEntryMultiFormStepsService,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService,
    public router: Router
  ) {
    this.options = this.toastr.toastrConfig;
    this.options.iconClasses = {
      error: "sds-toast--error",
      info: "sds-toast--info",
      success: "sds-toast--success",
      warning: "sds-toast--warning",
    };
    this.options.closeButton = true;
  }
  ngOnInit() {
    const reviewStep = this.steps.find(step => step.isReview);
    reviewStep.fieldConfig.fieldGroup.unshift({
      key: "customTemplate",
      type: "custom",
      templateOptions: {
        customResultsTemplate: this.myTemplate,
      },
    });

    const savedDraft: string = sessionStorage.getItem("dataEntry");
    if (!savedDraft) {
      return;
    }


    this.getFormDataFromDraft(savedDraft);
  }

  ngOnDestroy() {
    const data = {
      model: this.model,
      metadata: {
        stepId: this.currentStepId,
        stepValidityMap: this.stepValidityMap,
      },
    };

    this.onSaveClicked(data);
  }

  onSaveClicked($event: { model: any; metadata: any }) {
    sessionStorage.setItem("dataEntry", JSON.stringify($event));
    this.stepValidityMap = $event.metadata.stepValidityMap;
    this.showSuccessSaveToaster();
  }

  showSuccessSaveToaster() {
    this.toastr.success("Saved successfully", "");
  }

  onStepChange($event) {
    this.currentStepId = $event.id;
    if (this.currentStepId != 'reviewId' && !this.isReviewStep) {
      return;
    }

    if (this.currentStepId === 'reviewId') {
      this.isReviewStep = true;
      this.onReviewAndSubmit();
    } else {
      // Previous step was review, but now we've navigated away, reset readonly mode to edit mode
      this.isReviewStep = false;
      this.onReviewAndSubmit(false);
    }
    this.cdr.detectChanges();
  }

  getFormDataFromDraft(savedDraft: string) {
    const savedDraftModel = JSON.parse(savedDraft);

    this.model = savedDraftModel.model || {};
    this.currentStepId = savedDraftModel?.metadata?.stepId;
    this.stepValidityMap = savedDraftModel?.metadata?.stepValidityMap;
  }

  onReviewAndSubmit(enable = true) {
    const reviewStep = this.steps.find(step => step.isReview);
    let reviewFields = reviewStep.fieldConfig.fieldGroup;
    FormlyUtilsService.setReadonlyMode(enable, reviewFields);
    return reviewFields;
  }

  getFlatSteps(steps: any[]): any[] {
    let flat: any[] = [];
    steps.forEach((step) => {
      if (
        step.hideFn &&
        step.hideFn(step.model ? step.model : this.model, step.fieldConfig)
      ) {
        step.hide = true;
        return;
      }
      step.hide = false;
      if (step.editable && !step.isReview) {
        flat.push(step);
      }

      if (step.children && step.children.length) {
        const childSteps = this.getFlatSteps(step.children);
        flat = flat.concat(childSteps);
      }
    });

    return flat;
  }

  onSubPageEventClick(pageName) {
    if (pageName == "review") {
      this.currentStepId = "reviewId";
      this.isReviewStep = true;
      this.reviewFields = this.onReviewAndSubmit();
      this.cdr.detectChanges();
    } else if (pageName == "edit") {
      const savedDraft: string = sessionStorage.getItem("dataEntry");
      if (!savedDraft) {
        return;
      }
      this.getFormDataFromDraft(savedDraft);
    } else if (pageName == "preview") {
      this.router.navigate(["/search"]);
    }
  }
}
