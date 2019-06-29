import { Component, OnInit, Input, OnChanges, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {WorkspaceComponent} from '../workspace.component';
import { EntityService } from './entity-service/entity.service';
import { SearchListConfiguration } from '@gsa-sam/layouts';
import { WorkspaceModelService } from '../service/workspace-model.service';
@Component({
  selector: 'entity-workspace',
  templateUrl: './entity-list.component.html'
  //,  styleUrls: ['./_styles.scss']
})
export class EntityListComponent implements OnInit {
  filterModel: any = {};
  constructor(public service: EntityService, private change: ChangeDetectorRef, public workspaceService: WorkspaceModelService) {}

  configuration: SearchListConfiguration = {
    defaultSortValue: 'expirationDateAscending', pageSize: 25,
    sortList: [{ text: 'Expiration Date Ascending', value: 'expirationDateAscending' },
    { text: 'Expiration Date Descending', value: 'expirationDateDescending' },
    { text: 'Title A - Z', value: 'titleA-Z' },
    { text: 'Title Z - A', value: 'titleZ-A' },
    ]
  };



  ngOnInit() {
    this.workspaceService.currentFilterModel.subscribe(data => this.filterModel = data);
  }

}
