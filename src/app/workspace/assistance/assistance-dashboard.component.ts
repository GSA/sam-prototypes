import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WorkspaceModelService } from '../service/workspace-model.service';

@Component({
  selector: 'app-assistance-dashboard',
  templateUrl: './assistance-dashboard.component.html',
  styleUrls: ['./assistance-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssistanceDashboardComponent implements OnInit {
  constructor(public workspaceModel: WorkspaceModelService) {
  	this.workspaceModel.title = "Assistance Dashboard";
  	this.workspaceModel.page = 'assistancedashboard';
  	this.workspaceModel.view = 'open';
  	this.workspaceModel.showNav = false;
  	this.workspaceModel.showFilters = true;
    this.workspaceModel.showSearchBar = false;
  }

  ngOnInit() {
  }

}
