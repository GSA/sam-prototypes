import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-data-entry-home",
  templateUrl: "./data-entry-home.component.html",
  styleUrls: ["./data-entry-home.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataEntryHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
