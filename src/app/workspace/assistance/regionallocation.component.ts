import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WorkspaceModelService } from '../service/workspace-model.service';

@Component({
  selector: 'app-regionallocation',
  templateUrl: './regionallocation.component.html',
  styleUrls: ['./regionallocation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionallocationComponent implements OnInit {

  constructor(public workspaceModel: WorkspaceModelService) {
  	this.workspaceModel.title = "Regional Assistance Locations";
  	this.workspaceModel.page = 'regionallocation';
  	this.workspaceModel.view = 'open';
  	this.workspaceModel.showNav = false;
  	this.workspaceModel.showFilters = true;
    this.workspaceModel.showSearchBar = true;
    this.workspaceModel.placeholderText = 'Enter a location or keyword';
  }

  ngOnInit() {
  }

}
