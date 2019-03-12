import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WorkspaceModelService } from '../service/workspace-model.service';

@Component({
  selector: 'app-cfdanumber',
  templateUrl: './cfdanumber.component.html',
  styleUrls: ['./cfdanumber.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CfdanumberComponent implements OnInit {

  constructor(public workspaceModel: WorkspaceModelService) {
  	this.workspaceModel.title = "CFDA Numbers";
  	this.workspaceModel.page = 'cfdanumber';
  	this.workspaceModel.view = 'open';
  	this.workspaceModel.showNav = false;
  	this.workspaceModel.showFilters = true;
  	this.workspaceModel.showSearchBar = false;
  }

  ngOnInit() {
  }

}
