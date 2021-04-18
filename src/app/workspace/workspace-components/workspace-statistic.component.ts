import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { StatisticsGroup } from '../../services/workspace-service/workspace.service';

@Component({
  selector: 'workspace-statistics',
  template: `
     <div class="sds-statistics">
      	<button  *ngFor="let item of model.statistics" [routerLink]="[item.route]" [ngClass]="[item.colorClass, 'statistic']">
    		<div class="value">
      			<span class="circular">{{item.value}}</span></div>
    		<div class="label">{{item.label}}</div>
  		</button>
     </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkspaceStatisticComponent implements OnInit {

  @Input() model: StatisticsGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
