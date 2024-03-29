import { Component, ChangeDetectionStrategy, TemplateRef, ViewChild, AfterViewInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { SdsDialogService } from "@gsa-sam/components";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { EntityReportingService } from "../services/entity-reporting-service/entity-reporting.service";
import _ from "lodash-es";
import { FormlyUtilsService } from "@gsa-sam/sam-formly";
@Component({
  selector: "app-data-entry",
  templateUrl: "./data-entry.component.html",
  styleUrls: [],
  providers: [EntityReportingService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataEntryComponent {
  @ViewChild('myTemplate') myTemplate: TemplateRef<any>;
  isReviewMode: boolean = false;
  reviewFields: FormlyFieldConfig[] = [];
  service: any;
  currentPageIndex = 0;
  isFormValid: boolean = false;

  stepDefinition: any[] = [
    { index: 0, isTouched: false, isValid: null },
    { index: 1, isTouched: false, isValid: null },
    { index: 2, isTouched: false, isValid: null },
  ];

  formStepperCount: number = 0;
  previousPageIndex = 0;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public dialog: SdsDialogService,
    private entityReportingService: EntityReportingService
  ) { }
  subawardeeModel: any = {};
  subawardeeOptions: FormlyFormOptions;
  subawardeefields: FormlyFieldConfig[] = [
    {
      type: "stepper",
      templateOptions: {
        hideSidePannel: true,
      },
      fieldGroup: [
        // step 1
        {
          templateOptions: { label: "Input Details" },
          fieldGroup: [
            {
              key: "vendor.globalDunsNumber",
              type: "input",
              templateOptions: {
                label: "Subawardee Number",
              },
            },
            {
              key: "vendor.globalName",
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
              hideExpression: (model) =>
                this.subawardeeModel.country === "canada",
              templateOptions: {
                type: "number",
                label: "ZIP Code (+ 4)",
                maxLength: 5,
                min: 0,
                pattern: "\\d{5}",
              },
            },

            {
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
              hideExpression: (model) =>
                this.subawardeeModel.country === "canada",
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
              type: "input",
              key: "congressional_district",
              hideExpression: (model) =>
                this.subawardeeModel.country === "canada",
              templateOptions: {
                label: "Congressional District",
              },
            },
          ],
        },
      ],
    },
  ];

  form = new FormGroup({});
  model: any = {
    selectedIndex: 0,
  };

  options: FormlyFormOptions = {
    formState: {
      showValidation: false,
    },
  };

  fields: FormlyFieldConfig[] = [

    {
      type: "stepper",
      templateOptions: {
        hideSidePannel: true,
        selectedIndex: 1,
      },
      expressionProperties: {
        selectedIndex: "model.selectedIndex",
      },
      fieldGroup: [
        {
          templateOptions: { label: "Review Contract", hasHeader: true },
          fieldGroup: [
            {
              key: "dataentry.contract",
              type: "contract",
              templateOptions: {
                items: this.getData(),
              },
            },
            {
              key: "test",
              template: `<h3 class="margin-top-2">Certifications</h3>`,
            },
            {
              key: "dataentry.certificate",
              type: "checkbox",
              templateOptions: {
                description:
                  "The FFATA Report can only be submitted by prime awardees. Only continue with this submission if you are the prime awardee for this contract.",
                label:
                  "I verify that I am the prime awardee for this contract.",
              },
            },
          ],
        },

        {
          templateOptions: { label: "Report Details", hasHeader: true },
          fieldGroup: [
            {
              key: "dataentry.details",
              templateOptions: {
                placeholder: "Input Unique Entity ID",
              },

              fieldGroup: [
                {
                  key: "report",
                  fieldGroupClassName: "grid-row grid-gap-2",
                  fieldGroup: [
                    {
                      className: "grid-col-8",
                      key: "month",
                      type: "select",
                      templateOptions: {
                        label: "Report Month",
                        hideOptional: true,
                        options: [
                          { label: "Jan", value: "01" },
                          { label: "Feb", value: "02" },
                          { label: "Mar", value: "03" },
                          { label: "Apr", value: "04" },
                        ],
                      },
                      validation: {
                        show: true,
                      },
                      expressionProperties: {
                        "templateOptions.required": "formState.showValidation",
                      },
                    },
                    {
                      className: "grid-col-4 margin-top-5",
                      key: "year",
                      type: "select",
                      templateOptions: {
                        hideLable: true,
                        hideOptional: true,
                        options: [
                          { label: "2001", value: "01" },
                          { label: "2002", value: "02" },
                          { label: "2003", value: "03" },
                          { label: "2004", value: "04" },
                        ],
                      },
                      validation: {
                        show: true,
                      },
                      expressionProperties: {
                        "templateOptions.required": "formState.showValidation",
                      },
                    },
                  ],
                },

                {
                  className: "desktop:grid-col-12 tablet:grid-col-12",
                  type: "input",
                  key: "title",

                  templateOptions: {
                    label: "Program or Project Title (Optional)",
                  },
                  validation: {
                    show: true,
                  },
                  expressionProperties: {
                    "templateOptions.required": "formState.showValidation",
                  },
                },
                {
                  template:
                    "<h4 class='padding-top-1'>Place of Performance</h4>",
                },
                {
                  className: "grid-col-8",
                  type: "input",
                  key: "cityName",
                  templateOptions: {
                    label: "City",
                    hideOptional: true,
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
                    hideOptional: true,
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
                  className: "grid-col-7",
                  key: "country",
                  type: "select",
                  defaultValue: "united_states",
                  templateOptions: {
                    label: "Country",
                    hideOptional: true,
                    options: [
                      { label: "United States (USA)", value: "united_states" },
                      { label: "Canada", value: "canada" },
                    ],
                  },
                },
                {
                  className: "grid-col-4",
                  type: "input",
                  key: "zip",

                  templateOptions: {
                    hideOptional: true,
                    type: "number",
                    label: "Zip",
                    maxLength: 5,
                    min: 0,
                    pattern: "\\d{5}",
                  },
                },
                {
                  className: "grid-col-4",
                  type: "input",
                  key: "congressional_district",
                  hideExpression: (model) => this.model.country === "canada",
                  templateOptions: {
                    label: "Congressional District",
                    hideOptional: true,
                  },
                },
                {
                  key: "comparisonText",
                  template: `<br/><b>In order to determine whether you are required to report executive compensation data, answer the following question(s)</b>
                  <ul> <li> In your business or organization's preceding completed fiscal year, did your business or organization (the legal entity to which this specific SAM record, represented by a DUNS number, belongs) receive: </li>
                  <li>80 percent or more of your annual gross revenues in U.S. federal contracts, subcontracts, loans, grants, subgrants, and/or cooperative agreements. </li>
                  <li>25,000,000 or more in annual gross revenues from U.S. federal contracts, subcontracts, loans, grants, subgrants, and/or cooperative agreements? </li>`,
                },
                {
                  className: "grid-col-7",
                  key: "compensation",
                  type: "radio",
                  templateOptions: {
                    label: '',
                    hideLable: true,
                    // label: `In order to determine whether you are required to report executive compensation data, answer the following question(s)`,
                    // description: ` 1. In your business or organization's preceding completed fiscal year, did your business or organization (the legal entity to which this specific SAM record, represented by a DUNS number, belongs) receive: <br/>
                    // 80 percent or more of your annual gross revenues in U.S. federal contracts, subcontracts, loans, grants, subgrants, and/or cooperative agreements.
                    // $25,000,000 or more in annual gross revenues from U.S. federal contracts, subcontracts, loans, grants, subgrants, and/or cooperative agreements?`,
                    hideOptional: true,
                    options: [
                      { key: "yes", value: "Yes" },
                      { key: "no", value: "No" },
                    ],
                  },
                },
              ],
            },
          ],
        },

        {
          templateOptions: { label: "Subawardee Data", hasHeader: true },
          fieldGroup: [
            {
              key: "addAwardee",
              type: "repeat",
              fieldArray: {
                fieldGroupClassName: "row",
                templateOptions: {
                  subawardeeModel: this.subawardeeModel,
                  subawardeefields: this.subawardeefields,
                  service: this.entityReportingService,
                  getDetails: this.getAwardeeDetails,
                  btnText: "Auto-fill Vendor Information",
                  inputPlaceHolder: "Input Unique Entity ID",
                },
                fieldGroup: [
                  {
                    className: "col-sm-4",
                    key: "subawards",
                    type: "subaward",
                    templateOptions: {
                      subawardItem: {},
                    },
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  ];


  modelChanges(ev) {
    console.log(ev, "model");
  }
  onSelectionChange(index) {
    this.previousPageIndex = this.model["selectedIndex"];

    this.isReviewMode = false;
    this.model["selectedIndex"] = index;
    this.currentPageIndex = index;

    if (index !== this.previousPageIndex) {
      if (this.stepDefinition[this.previousPageIndex].isValid != null) {
        this.options.formState.showValidation = true;
      }

      const valid = this.isValid(
        this.fields[0].fieldGroup[this.previousPageIndex],
        this.previousPageIndex
      );
      this.stepDefinition[this.previousPageIndex].isValid = valid;
    }
    const findStepValidIndex = this.stepDefinition.filter(
      (x) => x.isValid === false || x.isValid === null
    );

    this.isFormValid = findStepValidIndex.length > 0 ? false : true;
  }

  getData() {
    const searchParameters: any = {
      page: {
        pageNumber: 0,
        pageSize: 25,
        totalPages: 4,
      },
      sortField: "",
      filter: {},
    };
    const results = this.entityReportingService.getSortedFilteredData(
      searchParameters
    );
    return results[0];
  }

  getAwardeeDetails(id) {
    return this.service.getFilteredDataById(id);
  }

  isTouched(field: FormlyFieldConfig, index: number) {
    if (field.fieldGroup) {
      let element =
        field.fieldGroup.length > 1 ? field.fieldGroup[2] : field.fieldGroup[0];
      if (index !== 2 && element && element.formControl) {
        element.formControl.markAllAsTouched();
      }
    }
  }

  updateModelOption(field: FormlyFieldConfig, index: number) {
    if (index == 1 && field.key && field.fieldGroup) {
      field.fieldGroup.forEach((f) => this.updateModelOption(f, index));
    }
    if (field.key || !field.fieldGroup) {
      if (field?.modelOptions?.updateOn) {
        field.modelOptions.updateOn = "blur";
      }
    }
  }
  isValid(field: FormlyFieldConfig, index: number) {
    this.isTouched(field, index);

    if (field.key || !field.fieldGroup) {
      if (index == 2) {
        if (this.model.addAwardee.length <= 0) {
          return false;
        } else {
          return true;
        }
      } else {
        return field.formControl.valid;
      }
    }
    return field.fieldGroup.every((f) => this.isValid(f, index));
  }

  onReviewAndSubmit() {
    this.reviewFields = [];
    this.isReviewMode = true;
    let prvHeader: FormlyFieldConfig = {
      key: "reviewHeader",
      template: ' <h1> Review and Submit </h1>  <hr />'
    };
    this.reviewFields.push(prvHeader);

    let prvAlert: FormlyFieldConfig = {
      key: "customTemplate",
      type: 'custom',
      templateOptions: {
        customResultsTemplate: this.myTemplate
      }
    };
    this.reviewFields.push(prvAlert);
    this.fields[0].fieldGroup.forEach((element) => {
      this.reviewFields.push(_.cloneDeep(element));
    });
    FormlyUtilsService.setReadonlyMode(true, this.reviewFields);
  }
}
