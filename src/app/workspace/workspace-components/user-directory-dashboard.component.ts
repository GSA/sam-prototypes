import { Component, OnInit } from '@angular/core';
import { WorkspaceDashboardComponent } from './workspace-dashboard.component';

@Component({
  selector: 'user-directory-dashboard',
  template: `      
    <workspace-card [title]="title" [route]="route">
        <button class="usa-button usa-button--outline">Assign Role</button>
    </workspace-card>
  `
})
export class UserDirectoryDashboardComponent extends WorkspaceDashboardComponent implements OnInit {

  constructor() { 
    super();
  	this.title = "User Directory";
  	this.route = "/user-directory/workspace";
  }

  ngOnInit(): void {
  }

}