import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { SdsDialogService } from "@gsa-sam/components";

import { SdsFormlyDialogComponent } from "@gsa-sam/sam-formly";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
export interface StepType {
  label: string;
  fields: FormlyFieldConfig[];
}

@Component({
  selector: "app-subaward-data",
  templateUrl: "./subaward-data.component.html",
  styleUrls: ["./subaward-data.component.scss"],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubawardDataComponent implements OnInit {
  itemsDefault = [
    { title: "First", id: 1 },
    { title: "Second", id: 2 },
  ];

  items = this.itemsDefault;
  menu = {
    trigger: {
      type: "plain",
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
      type: "stepper",
      // key: 'step',      // added key => crash
      fieldGroup: [
        {
          templateOptions: { label: "Review Subawardee" },
          template: "<child-item-sample></child-item-sample>",
        },

        // step 1
        {
          templateOptions: { label: "Input Details" },
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

        // step 2
        {
          templateOptions: { label: "Input Place of Performance" },
          fieldGroup: [
            {
              fieldGroupClassName: "grid-row",

              className: "grid-col-7",
              key: "country",
              type: "select",
              defaultValue: "united_states",
              templateOptions: {
                label: "Country",

                options: [
                  { label: "United States (USA)", value: "united_states" },
                  { label: "Canada", value: "canada" },
                ],
              },
            },
            {
              className: "desktop:grid-col-12 tablet:grid-col-12",
              type: "input",
              key: "street1",
              templateOptions: {
                label: "Street Address 1",
              },
            },
            {
              className: "grid-col-12 tablet:grid-col-12",
              type: "input",
              key: "street2",
              templateOptions: {
                label: "Street Address 2",
              },
            },
            {
              className: "grid-col-4",
              type: "input",
              key: "zip",
              hideExpression: (model) => this.model.country === "canada",
              templateOptions: {
                type: "number",
                label: "ZIP Code (+ 4)",
                maxLength: 5,
                min: 0,
                pattern: "\\d{5}",
              },
            },
            {
              className: "grid-col-4",
              type: "input",
              key: "postal",
              hideExpression: (model) => this.model.country === "united_states",
              templateOptions: {
                label: "Postal Code",
                maxLength: 6,
                min: 0,
                pattern: "\\d{5}",
              },
            },
            {
              className: "grid-col-8",
              type: "input",
              key: "cityName",
              templateOptions: {
                label: "City",
              },
            },
            {
              className: "grid-col-4",
              key: "state",
              type: "select",
              defaultValue: "None",
              hideExpression: (model) => this.model.country === "canada",
              templateOptions: {
                label: "State",

                options: [
                  { id: "0", label: "--Select--", value: "Select" },
                  { id: "1", label: "Alabama", value: "Alabama" },
                  { id: "2", label: "Alaska", value: "Alaska" },
                  { id: "3", label: "Arizona", value: "Arizona" },
                  { id: "4", label: "Arkansas", value: "Arkansas" },
                  { id: "5", label: "California", value: "California" },
                  { id: "6", label: "Colorado", value: "Colorado" },
                  { id: "7", label: "Connecticut", value: "Connecticut" },
                  { id: "8", label: "Delaware", value: "Delaware" },
                  {
                    id: "9",
                    label: "District of Columbia",
                    value: "District of Columbie",
                  },
                  { id: "10", label: "Florida", value: "Florida" },
                  { id: "11", label: "Georgia", value: "Georgia" },
                  { id: "12", label: "Hawaii", value: "Hawaii" },
                  { id: "13", label: "Idaho", value: "Idaho" },
                  { id: "14", label: "Illinois", value: "Illinois" },
                  { id: "15", label: "Indiana", value: "Indiana" },
                  { id: "16", label: "Iowa", value: "Iowa" },
                  { id: "17", label: "Kansas", value: "Kansas" },
                  { id: "18", label: "Kentucky", value: "Kentucky" },
                  { id: "19", label: "Louisiana", value: "Louisiana" },
                  { id: "20", label: "Maine", value: "Maine" },
                  { id: "21", label: "Maryland", value: "Maryland" },
                  {
                    id: "22",
                    label: "Massachusetts",
                    value: "Massachusetts",
                  },
                  { id: "23", label: "Michigan", value: "Michigan" },
                  { id: "24", label: "Minnesota", value: "Minnesota" },
                  { id: "25", label: "Mississippi", value: "Mississippi" },
                  { id: "26", label: "Missouri", value: "Missouri" },
                  { id: "27", label: "Montana", value: "Montana" },
                  { id: "28", label: "Nebraska", value: "Nebraska" },
                  { id: "29", label: "Nevada", value: "Nevada" },
                  {
                    id: "30",
                    label: "New Hampshire",
                    value: "New Hampshire",
                  },
                  { id: "31", label: "New Jersey", value: "New Jersey" },
                  { id: "32", label: "New Mexico", value: "New Mexico" },
                  { id: "33", label: "New York", value: "New York" },
                  {
                    id: "34",
                    label: "North Carolina",
                    value: "North Carolina",
                  },
                  {
                    id: "35",
                    label: "North Dakota",
                    value: "North Dakota",
                  },
                  { id: "36", label: "Ohio", value: "Ohio" },
                  { id: "37", label: "Oklahoma", value: "Oklahoma" },
                  { id: "38", label: "Oregon", value: "Oregon" },
                  {
                    id: "39",
                    label: "Pennsylvania",
                    value: "Pennsylvania",
                  },
                  {
                    id: "40",
                    label: "Rhode Island",
                    value: "Rhode Island",
                  },
                  {
                    id: "41",
                    label: "South Carolina",
                    value: "South Carolina",
                  },
                  {
                    id: "42",
                    label: "South Dakota",
                    value: "South Dakota",
                  },
                  { id: "43", label: "Tennessee", value: "Tennessee" },
                  { id: "44", label: "Texas", value: "Texas" },
                  { id: "45", label: "Utah", value: "Utah" },
                  { id: "46", label: "Vermont", value: "Vermont" },
                  { id: "47", label: "Virginia", value: "Virginia" },
                  { id: "48", label: "Washington", value: "Washington" },
                  {
                    id: "49",
                    label: "West Virginia",
                    value: "West Virginia",
                  },
                  { id: "50", label: "Wisconsin", value: "Wisconsin" },
                  { id: "51", label: "Wyoming", value: "Wyoming" },
                ],
              },
            },
            {
              className: "grid-col-4",
              type: "select",
              key: "province",
              hideExpression: (model) => this.model.country === "united_states",
              templateOptions: {
                label: "State/Province",

                options: [
                  { id: "1", label: "Alberta", value: "Alberta" },
                  {
                    id: "2",
                    label: "British Columbia",
                    value: "British Columbia",
                  },
                  { id: "3", label: "Manitoba", value: "Manitoba" },
                  {
                    id: "4",
                    label: "New Brunswick",
                    value: "New Brunswick",
                  },
                  {
                    id: "5",
                    label: "Newfoundland and Labrador",
                    value: "Newfoundland and Labrador",
                  },
                  { id: "6", label: "Nova Scotia", value: "Nova Scotia" },
                  { id: "7", label: "Ontario", value: "Ontario" },
                  {
                    id: "8",
                    label: "Prince Edward Island",
                    value: "Prince Edward Island",
                  },
                  { id: "9", label: "Quebec", value: "Quebec" },
                  {
                    id: "10",
                    label: "Saskatchewan",
                    value: "Saskatchewan",
                  },
                ],
              },
            },
            {
              className: "grid-col-4",
              type: "input",
              key: "congressional_district",
              hideExpression: (model) => this.model.country === "canada",
              templateOptions: {
                label: "Congressional District",
              },
            },
          ],
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
