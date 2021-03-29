import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

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

  constructor() {}

  ngOnInit(): void {}
}
