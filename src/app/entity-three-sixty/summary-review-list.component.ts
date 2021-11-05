import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { INavigationLink, NavigationMode } from "@gsa-sam/components";

@Component({
  selector: "summary-review-list",
  template: `
    <div class="usa-card sds-card--vertical">
      <div class="usa-card__container">

        <div class="usa-card__header">
          <div class="sds-card__icon">
            <usa-icon
              class="text-info"
              [icon]="'exclamation-triangle'"
              [size]="'2x'"
            ></usa-icon>
          </div>
        </div>
      
        <div class="usa-card__body">
          <span class="usa-card__heading text-semibold margin-0">Review</span>
          <link-list [links]="links"></link-list>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryReviewListComponent implements OnInit {
  links: INavigationLink[] = [
    {
      text: "Exclusions",
      route: "/",
      mode: NavigationMode.INTERNAL,
    },
    {
      text: "Proceedings",
      route: "/",
      mode: NavigationMode.INTERNAL,
    },
    {
      text: "Responsibility/Qualification Information",
      route: "/",
      mode: NavigationMode.INTERNAL,
    },
    {
      text: "Debt Subject to Offset",
      route: "/",
      mode: NavigationMode.INTERNAL,
    },
  ];

  constructor() { }

  ngOnInit(): void { }
}
