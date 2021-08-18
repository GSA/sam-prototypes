import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "home-seal",
  template: `
    <div class="sds-seal">
      <usa-icon
        class="text-secondary"
        [icon]="'flag-fill'"
        [size]="'2x'"
      ></usa-icon>
      <div class="sds-seal__content">
        Official U.S. Government Website
        <span>100% Free</span>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSealComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
}
