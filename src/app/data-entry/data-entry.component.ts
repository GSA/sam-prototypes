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

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  items: any[] = [];

  // items = this.itemsDefault;

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
                service: this.service,
              },
            },
          ],
        },

        // step 2
        {
          templateOptions: { label: "Report Details" },
          fieldGroup: [
            {
              key: "details",
              type: "details",
              templateOptions: {},
            },
          ],
        },
        // step 3
        {
          templateOptions: { label: "Subawardee Details" },
          fieldGroup: [
            {
              key: "subaward",
              type: "subaward",
              templateOptions: {},
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
    public service: EntityReportingService
  ) {
    const searchParameters: SearchParameters = {
      page: {
        pageNumber: 0,
        pageSize: 25,
        totalPages: 4,
      },
      sortField: "",
      filter: {},
    };
    this.items = this.service.getSortedFilteredData(searchParameters);
    console.log(this.items);
  }

  ngOnInit(): void {}
  onPanelSelected(ev: NavigationLink) {
    this.currentSelectedPanel = {
      ...ev,
    };

    this.currentPageIndex = this.navigationLinks.indexOf(ev);
    this.router.navigate([ev.route], { relativeTo: this.route });
  }
}
