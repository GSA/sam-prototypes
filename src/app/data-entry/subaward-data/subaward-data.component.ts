import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import {
  NavigationLink,
  NavigationMode,
  SdsDialogService,
  SelectionPanelModel,
} from "@gsa-sam/components";
import { SdsFormlyDialogComponent } from "@gsa-sam/sam-formly";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";

@Component({
  selector: "app-subaward-data",
  templateUrl: "./subaward-data.component.html",
  styleUrls: ["./subaward-data.component.scss"],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubawardDataComponent implements OnInit {
  menu = {
    trigger: {
      type: "plain", // plain | primary
      shadow: true,
    },
    actions: [
      { id: "DownloadBtn", text: "Download" },
      { id: "FollowBtn", text: "Follow" },
      { id: "ShareBtn", text: "Share" },
    ],
  };
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: "addsubawardee",
      type: "input",
      templateOptions: {
        //label: "Entity Name",
        placeholder: "Input Unique Entity ID",
      },
    },
  ];

  subawardeeModel: any = {};
  subawardeemodel: any = {};
  subawardeeoptions: FormlyFormOptions;
  subawardeefields: FormlyFieldConfig[] = [
    {
      key: "subawardee",
      templateOptions: {
        label: "Entity Information",
        group: "panel",
      },
      fieldGroup: [
        {
          key: "number",
          type: "input",
          templateOptions: {
            label: "Subawardee Number",
          },
        },
        {
          key: "name",
          type: "input",
          templateOptions: {
            label: "Subawardee Name",
          },
        },
        {
          key: "date",
          type: "datepicker",
          templateOptions: {
            label: "Subawardee Date",
            placeholder:
              "eg: " +
              new Date().toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }),
          },
        },
        {
          key: "description",
          type: "textarea",
          templateOptions: {
            label:
              "Description of the overall purpose and expected outcomes, OR results of the contract, including significant deliverables and, if appropriate, associated units of measure. (Optional)",
          },
        },
        {
          key: "subcontract",
          type: "radio",
          templateOptions: {
            label:
              "As provided to you by your subcontractor, in your subcontractor's business or organization's preceding completed fiscal year, did its business or organization (the legal entity to which the DUNS number it provided belongs) receive (1) 80 percent or more of its annual gross revenues in U.S. federal contracts, subcontracts, loans, grants, subgrants, and/or cooperative agreements; and (2) $25,000,000 or more in annual gross revenues from U.S. federal contracts, subcontracts, loans, grants, subgrants, and/or cooperative agreements?*:",
            required: true,
            options: [
              {
                key: "yes",
                value: "Yes",
              },
              {
                key: "no",
                value: "No",
              },
            ],
          },
        },
      ],
    },
  ];
  constructor(public dialog: SdsDialogService) {}
  addSubawardee() {
    const data: any = {
      fields: this.subawardeefields,
      model: this.model,
      submit: "Submit",
      title: "Add Subawardee",
      options: this.options,
      cancel: "No thanks",
    };

    const dialogRef = this.dialog.open(SdsFormlyDialogComponent, {
      width: "medium",
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.subawardeeModel = result;
        console.log(result);
      }
    });
  }
  ngOnInit(): void {}
}
