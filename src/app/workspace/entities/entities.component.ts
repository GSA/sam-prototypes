import { Component, OnInit, ChangeDetectionStrategy, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';
import { WorkspaceModelService } from '../service/workspace-model.service';
import { EntityService } from './entity-service/entity.service';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class EntitiesComponent implements OnInit, AfterViewInit {

  @ViewChild('entityfilters') filtersTemplate: TemplateRef<any>;

  constructor(public workspaceModel: WorkspaceModelService, public entityService: EntityService) {
  	this.workspaceModel.title = "Entity Registrations";
  	this.workspaceModel.page = 'registrations';
  	this.workspaceModel.view = 'open';
  	this.workspaceModel.showNav = false;
  	this.workspaceModel.showFilters = true;
    this.workspaceModel.showSearchBar = true;
    this.workspaceModel.placeholderText = 'Enter an entity ID, name, or keyword';
  }

  ngOnInit() {
  	this.workspaceModel.template = this.filtersTemplate;
  }

  ngAfterViewInit() {
  }

}
