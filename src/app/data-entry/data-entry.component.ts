import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import {
  NavigationLink,
  NavigationMode,
  SelectionPanelModel,
} from "@gsa-sam/components";
import { SearchParameters } from "@gsa-sam/layouts";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { EntityReportingService } from "../services/entity-reporting-service/entity-reporting.service";

@Component({
  selector: "app-data-entry",
  templateUrl: "./data-entry.component.html",
  styleUrls: [],
  providers: [EntityReportingService],
  //   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataEntryComponent implements OnInit {
  templateName = "subaward";

  items: any[] = [];
  // Report details formly configurations
  reportForm = new FormGroup({});
  reportModel: any = {};
  reportOptions: FormlyFormOptions = {};
  reportFields: FormlyFieldConfig[] = [
    {
      key: "addsubawardee",
      templateOptions: {
        //label: "Entity Name",
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
              defaultValue: "united_states",
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
            },
            {
              className: "grid-col-4",
              key: "year",
              type: "select",
              defaultValue: "united_states",
              templateOptions: {
                label: "test",
                hideOptional: true,
                options: [
                  { label: "Jan", value: "01" },
                  { label: "Feb", value: "02" },
                  { label: "Mar", value: "03" },
                  { label: "Apr", value: "04" },
                ],
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
        },
        {
          template: "<h4 class='padding-top-1'>Place of Performance</h4>",
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
          className: "grid-col-7",
          key: "compensation",
          type: "radio",

          templateOptions: {
            label: `In order to determine whether you are required to report executive compensation data, answer the following question(s)`,
            description: ` 1. In your business or organization's preceding completed fiscal year, did your business or organization (the legal entity to which this specific SAM record, represented by a DUNS number, belongs) receive:
            80 percent or more of your annual gross revenues in U.S. federal contracts, subcontracts, loans, grants, subgrants, and/or cooperative agreements.
            $25,000,000 or more in annual gross revenues from U.S. federal contracts, subcontracts, loans, grants, subgrants, and/or cooperative agreements?`,
            hideOptional: true,
            options: [
              { key: "yes", value: "Yes" },
              { key: "no", value: "No" },
            ],
          },
        },
      ],
    },
  ];

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
  // Data entry formly configurations
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      type: "stepper",
      fieldGroup: [
        {
          templateOptions: { label: "Report Contract" },
          fieldGroup: [
            {
              key: "contract",
              type: "contract",
              templateOptions: {
                items: this.items,
              },
            },
            {
              key: "input",
              type: "input",
              templateOptions: {
                label: "",
              },
            },
          ],
        },

        {
          templateOptions: { label: "Report Details" },
          fieldGroup: [
            {
              key: "addsubawardee",
              templateOptions: {
                //label: "Entity Name",
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
                    },
                    {
                      className: "grid-col-4 margin-top-5",
                      key: "year",
                      type: "select",

                      templateOptions: {
                        //label: "year",
                        hideLable: true,
                        hideOptional: true,
                        options: [
                          { label: "2001", value: "01" },
                          { label: "2002", value: "02" },
                          { label: "2003", value: "03" },
                          { label: "2004", value: "04" },
                        ],
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
                  className: "grid-col-7",
                  key: "compensation",
                  type: "radio",

                  templateOptions: {
                    label: `In order to determine whether you are required to report executive compensation data, answer the following question(s)`,
                    description: ` 1. In your business or organization's preceding completed fiscal year, did your business or organization (the legal entity to which this specific SAM record, represented by a DUNS number, belongs) receive:
                    80 percent or more of your annual gross revenues in U.S. federal contracts, subcontracts, loans, grants, subgrants, and/or cooperative agreements.
                    $25,000,000 or more in annual gross revenues from U.S. federal contracts, subcontracts, loans, grants, subgrants, and/or cooperative agreements?`,
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
          templateOptions: { label: "Subawardee Details" },
          fieldGroup: [
            {
              key: "subaward",
              type: "subaward",
              templateOptions: {
                data: [],
              },
            },
          ],
        },
      ],
    },
  ];

  currentPageIndex = 0;
  previousPage: string;
  nextPage: string;
  navigationLinks = [
    {
      text: "Review Contract",
      route: "review-contract",
      id: "reviewContract",
      mode: NavigationMode.INTERNAL,
    },
    {
      text: "Report Details",
      route: "review-details",
      id: "reportDetails",
      mode: NavigationMode.INTERNAL,
    },
    {
      text: "Subawardee Data",
      route: "subaward",
      id: "subawardeeData",
      mode: NavigationMode.INTERNAL,
    },
    {
      text: "Review and Submit",
      route: "reviewSubmit", //change it to new route
      id: "reviewAndSubmit",
      mode: NavigationMode.INTERNAL,
    },
  ];
  selectionPanelModel: SelectionPanelModel = {
    navigationLinks: this.navigationLinks,
    selectionMode: "SELECTION",
  };

  currentSelectedPanel = this.selectionPanelModel.navigationLinks[0];
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private service: EntityReportingService
  ) {}

  ngOnInit(): void {}
  onPanelSelected(ev: NavigationLink) {
    this.currentSelectedPanel = {
      ...ev,
    };

    this.currentPageIndex = this.navigationLinks.indexOf(ev);
    this.router.navigate([ev.route], { relativeTo: this.route });
  }
}
