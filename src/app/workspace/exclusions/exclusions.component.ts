import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WorkspaceModelService } from '../service/workspace-model.service';

@Component({
  selector: 'app-exclusions',
  templateUrl: './exclusions.component.html',
  styleUrls: ['./exclusions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExclusionsComponent implements OnInit {

  constructor(public workspaceModel: WorkspaceModelService) {
  	this.workspaceModel.title = "Exclusions";
  	this.workspaceModel.page = 'exclusions';
  	this.workspaceModel.view = 'open';
  	this.workspaceModel.showNav = false;
  	this.workspaceModel.showFilters = true;
    this.workspaceModel.showSearchBar = true;
    this.workspaceModel.placeholderText = 'Enter a name or keyword';
  }

  ngOnInit() {
  }

}
