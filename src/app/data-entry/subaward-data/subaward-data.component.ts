import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  NavigationLink,
  NavigationMode,
  SelectionPanelModel,
} from "@gsa-sam/components";

@Component({
  selector: "app-subaward-data",
  templateUrl: "./subaward-data.component.html",
  styleUrls: ["./subaward-data.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  navigationLinks = [
    {
      text: "Review Contract",
      route: "/dataentry",
      id: "reviewContract",
      queryParams: { type: "reviewContract" },
      mode: NavigationMode.INTERNAL,
    },
    {
      text: "Report Details",
      route: "/dataentry",
      id: "reportDetails",
      queryParams: { type: "reportDetails" },
      mode: NavigationMode.INTERNAL,
    },
    {
      text: "Subawardee Data",
      route: "/dataentry",
      id: "subawardeeData",
      queryParams: { type: "subawardeeData" },
      mode: NavigationMode.INTERNAL,
    },
    {
      text: "Review and Submit",
      route: "/dataentry",
      id: "reviewAndSubmit",
      queryParams: { type: "reviewAndSubmit" },
      mode: NavigationMode.INTERNAL,
    },
  ];
  selectionPanelModel: SelectionPanelModel = {
    navigationLinks: this.navigationLinks,
    selectionMode: "SELECTION",
  };
  constructor(private route: ActivatedRoute, public router: Router) {}

  ngOnInit(): void {}
  onPanelSelected(ev: NavigationLink) {
    this.router.navigate(["/dataentry"], {
      queryParams: ev.queryParams,
    });
  }
}
