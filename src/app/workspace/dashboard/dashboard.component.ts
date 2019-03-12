import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WorkspaceModelService } from '../service/workspace-model.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  constructor(public workspaceModel: WorkspaceModelService) {
  	this.workspaceModel.title = "Workspace Home";
  	this.workspaceModel.page = 'dashboard';
  	this.workspaceModel.view = 'closed';
  	this.workspaceModel.showNav = true;
  	this.workspaceModel.showFilters = false;
    this.workspaceModel.showSearchBar = false;
  }

  ngOnInit() {
  }

}
