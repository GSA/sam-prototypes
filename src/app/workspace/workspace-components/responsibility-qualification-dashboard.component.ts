import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WorkspaceDashboardComponent } from './workspace-dashboard.component';

@Component({
  selector: 'responsibility-qualification-dashboard',
  template: `
      <workspace-card [title]="title" [route]="route">
        <button class="usa-button usa-button--outline">Create Report</button>
      </workspace-card>
  `
})
export class ResponsibilityQualificationDashboardComponent extends WorkspaceDashboardComponent implements OnInit {

  constructor() { 
    super();
  	this.title = "Responsibility / Qualification";
  	this.route = "/responsibility-qualification/workspace";
  }

  ngOnInit(): void {
  }

}
