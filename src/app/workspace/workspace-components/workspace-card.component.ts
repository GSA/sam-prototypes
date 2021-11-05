import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'workspace-card',
  template: `          
    <div class="usa-card margin-bottom-4">
      <div class="usa-card__container" [ngClass]="{'shadow-none border-width-0' : noBorder}">
          <div class="usa-card__header sds-card__header--flex">
              <a  class="usa-link" [routerLink]="[route]" [queryParams]="queryParams"><h2 class="usa-card__heading">{{title}}</h2></a>
              <div>
                <ng-content select="button"></ng-content>
              </div>
          </div>
          <div class="usa-card__body">
            <ng-content></ng-content>
          </div>
        </div>
      </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkspaceCardComponent implements OnInit {

  @Input() title: string;
  @Input() route: string;
  @Input() queryParams: string[];
  @Input() noBorder: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
