import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import {
  NavigationLink,
  NavigationMode,
  SelectionPanelModel,
} from "@gsa-sam/components";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";

@Component({
  selector: "app-data-entry",
  templateUrl: "./data-entry.component.html",
  styleUrls: [],
  //   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataEntryComponent implements OnInit {
  templateName = "subaward";

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
    {
      key: "dataentry",
      templateOptions: { group: "panel" },
      fieldGroup: [
        {
          type: "contract",
          templateOptions: {
            label: "contract",
          },
        },
        {
          type: "details",
          templateOptions: {
            label: "details",
          },
        },
        {
          type: "subaward",
          templateOptions: {
            label: "subaward",
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
  constructor(private route: ActivatedRoute, public router: Router) {}

  ngOnInit(): void {}
  onPanelSelected(ev: NavigationLink) {
    this.currentSelectedPanel = {
      ...ev,
    };

    this.currentPageIndex = this.navigationLinks.indexOf(ev);
    this.router.navigate([ev.route], { relativeTo: this.route });
  }
}
