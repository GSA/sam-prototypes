import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WorkspaceDashboardComponent } from './workspace-dashboard.component';

@Component({
  selector: 'cba-dashboard',
  template: `
      <workspace-card [title]="title" [route]="route">
        <button class="usa-button usa-button--outline">Create CBA</button>
        <button class="usa-button usa-button--outline">Revise CBA</button>
    </workspace-card>
  `
})
export class CbaDashboardComponent extends WorkspaceDashboardComponent implements OnInit {

  constructor() { 
    super();
  	this.title = "Collective Bargaining Agreements";
  	this.route = "/wage-determinations/cba-workspace";
  }

  ngOnInit(): void {
  }

}
