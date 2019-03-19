import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WorkspaceModelService } from '../service/workspace-model.service';

@Component({
  selector: 'app-contractdata',
  templateUrl: './contractdata.component.html',
  styleUrls: ['./contractdata.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContractdataComponent implements OnInit {

  constructor(public workspaceModel: WorkspaceModelService) {
  	this.workspaceModel.title = "Contract Data Workspace";
  	this.workspaceModel.page = 'contractdata';
  	this.workspaceModel.view = 'open';
  	this.workspaceModel.showNav = false;
  	this.workspaceModel.showFilters = true;
    this.workspaceModel.showSearchBar = true;
    this.workspaceModel.placeholderText = 'Enter a contract ID or keyword';
    this.workspaceModel.template = null;
  }

  ngOnInit() {
  }

}
