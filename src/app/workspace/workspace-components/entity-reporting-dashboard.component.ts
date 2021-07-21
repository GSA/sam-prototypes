import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WorkspaceDashboardComponent } from './workspace-dashboard.component';

@Component({
  selector: 'entity-reporting-dashboard',
  template: `    
    <workspace-card [title]="title" [route]="route">
        <button class="usa-button usa-button--outline">Create Report</button>
    </workspace-card>
  `
})
export class EntityReportingDashboardComponent extends WorkspaceDashboardComponent implements OnInit {

  constructor() { 
    super();
  	this.title = "Entity Reporting";
  	this.route = "/entity-reporting/awards";
  }

  ngOnInit(): void {
  }

}