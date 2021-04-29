import { Component, OnInit, Input } from '@angular/core';
import { Statistic } from '../../services/interfaces/public-apis';

@Component({
  selector: 'workspace-statistic-square',
  template: `                  
    <div class="sds-statistics--alt margin-x-1">
      <button class="statistic-alt text-center" [routerLink]="[route]" [queryParams]="queryParams">
        <div class="value">{{value}}</div>
        <div class="label">{{label | uppercase }}</div>
      </button>
    </div>
  `
})
export class WorkspaceStatisticSquareComponent implements OnInit {

  @Input() value: number;
  @Input() label: string;
  @Input() route: string;
  @Input() queryParams: string[];

  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'workspace-statistics-square',
  template: `
     <div class="display-flex">
      	<ng-content select="workspace-statistic-square"></ng-content>
     </div>
  `
})
export class WorkspaceStatisticsSquareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}



