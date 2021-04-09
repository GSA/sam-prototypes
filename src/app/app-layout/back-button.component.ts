import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "back-button",
  template: `
    <button class="sds-button sds-button--circular" (click)="back()">
      <sds-icon [icon]="'chevron-left'"></sds-icon>
      <span class="usa-sr-only">Go Back</span>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackButtonComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit(): void {}

  back() {
    this.location.back();
  }
}
