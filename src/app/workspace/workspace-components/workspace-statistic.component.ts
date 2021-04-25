import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Statistic } from '../../services/interfaces/public-apis';

@Component({
  selector: 'workspace-statistic',
  template: `
      <button [routerLink]="[route]" [queryParams]="queryParams" [ngClass]="[color, 'statistic']">
        <div class="value">
            <span class="circular">{{value}}</span></div>
        <div class="label">{{label}}</div>
      </button>
  `
})
export class WorkspaceStatisticComponent implements OnInit {

  @Input() color: string;
  @Input() value: number;
  @Input() label: string;
  @Input() route: string;
  @Input() queryParams: string[];

  constructor() { }

  ngOnInit(): void {
  }
}

@Component({
  selector: 'workspace-statistics',
  template: `
     <div class="sds-statistics">
      	<ng-content select="workspace-statistic"></ng-content>
     </div>
  `
})
export class WorkspaceStatisticsComponent implements OnInit {

  @Input() model: Statistic[];

  constructor() { }

  ngOnInit(): void {
  }
}
