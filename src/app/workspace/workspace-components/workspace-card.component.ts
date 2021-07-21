import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'workspace-card',
  template: `          
    <div class="sds-card margin-bottom-4" [ngClass]="{'shadow-none border-width-0' : noBorder}">
        <div class="sds-card__header sds-card__header--flex">
            <a  class="usa-link" [routerLink]="[route]" [queryParams]="queryParams"><h2 class="sds-card__title ">{{title}}</h2></a>
            <div class="sds-card__buttons">
                <ng-content select="button"></ng-content>
            </div>
        </div>
        <div class="sds-card__body">
          <ng-content></ng-content>
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
