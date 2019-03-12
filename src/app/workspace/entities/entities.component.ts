import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WorkspaceModelService } from '../service/workspace-model.service';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntitiesComponent implements OnInit {

  constructor(public workspaceModel: WorkspaceModelService) {
  	this.workspaceModel.title = "Entity Registrations";
  	this.workspaceModel.page = 'registrations';
  	this.workspaceModel.view = 'open';
  	this.workspaceModel.showNav = false;
  	this.workspaceModel.showFilters = true;
    this.workspaceModel.showSearchBar = true;
    this.workspaceModel.placeholderText = 'Enter an entity ID, name, or keyword';
  }

  ngOnInit() {
  }

}
