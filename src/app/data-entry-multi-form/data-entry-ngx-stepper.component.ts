import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { UsaStepIndicatorModel } from "@gsa-sam/ngx-uswds";
import { SdsStepper } from "@gsa-sam/sam-formly";

@Component({
    selector: `data-entry-ngx-stepper`,
    templateUrl: `./data-entry-ngx-stepper.component.html`,
    providers: [
        { provide: SdsStepper, useExisting: DataEntryNgxStepperComponent }
    ]
})
export class DataEntryNgxStepperComponent extends SdsStepper implements OnInit {
    steps = [
        {
            id: "step1",
            label: "Step 1",
            editable: false,
            children: [
                {
                    id: "step1Child1",
                    label: "Review Contract",
                    editable: true,
                    // fieldConfig: this.dataEntryFieldService.getReviewContract("step1Child1"),
                },

                {
                    id: "step1Child3",
                    editable: true,
                    label: "Child report details",
                    // fieldConfig: this.dataEntryFieldService.getReportDetails("step1Child3"),
                },
            ],
        },
        {
            id: "step2Id",
            label: "Report Details",
            editable: true,
            // fieldConfig: this.dataEntryFieldService.getReportDetails("step2"),
        },
        {
            id: "step3Id",
            label: "Subawardee Data",
            editable: true,
            // fieldConfig: this.dataEntryFieldService.getSubawardeeData("step3"),
        },
        {
            id: 'reviewId',
            label: 'Review and Submit',
            editable: true,
            isReview: true,
            fieldConfig: {
                fieldGroup: [,
                    //   this.dataEntryFieldService.getReviewContract("step1Child1"),
                    //   this.dataEntryFieldService.getReportDetails("step1Child3"),
                    //   this.dataEntryFieldService.getReportDetails("step2"),
                    //   this.dataEntryFieldService.getSubawardeeData("step3", true),
                ]
            }
        }
    ];
    faltSteps: any[];

    getSteps(steps: any[]): any[] {
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

    ngOnInit() {
        this.faltSteps = this.getSteps(this.steps)
    }
}