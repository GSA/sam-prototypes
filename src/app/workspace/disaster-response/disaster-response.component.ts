import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WorkspaceModelService } from '../service/workspace-model.service';

@Component({
  selector: 'app-disaster-response',
  templateUrl: './disaster-response.component.html',
  styleUrls: ['./disaster-response.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisasterResponseComponent implements OnInit {

  constructor(public workspaceModel: WorkspaceModelService) {
  	this.workspaceModel.title = "Disaster Response Registry";
  	this.workspaceModel.page = 'disasterresponse';
  	this.workspaceModel.view = 'open';
  	this.workspaceModel.showNav = false;
  	this.workspaceModel.showFilters = true;
    this.workspaceModel.showSearchBar = true;
    this.workspaceModel.placeholderText = 'Enter an entity ID, name, or keyword';
  }

  ngOnInit() {
  }

}
