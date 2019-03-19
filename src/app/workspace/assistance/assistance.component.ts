import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WorkspaceModelService } from '../service/workspace-model.service';

@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.component.html',
  styleUrls: ['./assistance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssistanceComponent implements OnInit {
  constructor(public workspaceModel: WorkspaceModelService) {
  	this.workspaceModel.title = "Assistance Listings";
  	this.workspaceModel.page = 'assistancelist';
  	this.workspaceModel.view = 'open';
  	this.workspaceModel.showNav = false;
  	this.workspaceModel.showFilters = true;
    this.workspaceModel.showSearchBar = true;
    this.workspaceModel.placeholderText = 'Enter a listing ID or keyword';
  	}

  ngOnInit() {
  }

}
