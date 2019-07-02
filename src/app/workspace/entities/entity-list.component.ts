import { Component, OnInit, Input, OnChanges, ViewChild, AfterViewInit, ChangeDetectorRef, KeyValueDiffer, KeyValueDiffers, DoCheck, KeyValueChanges } from '@angular/core';
import { WorkspaceComponent } from '../workspace.component';
import { EntityService } from './entity-service/entity.service';
import { SearchListConfiguration } from '@gsa-sam/layouts';
@Component({
  selector: 'entity-workspace',
  templateUrl: './entity-list.component.html'
  //,  styleUrls: ['./_styles.scss']
})
export class EntityListComponent {
  filterModel: any = {};
  private filterModelChange: KeyValueDiffer<string, any>;
  constructor(public service: EntityService, private change: ChangeDetectorRef) {
  }

  configuration: SearchListConfiguration = {
    defaultSortValue: 'expirationDateAscending', pageSize: 25,
    sortList: [{ text: 'Expiration Date Ascending', value: 'expirationDateAscending' },
    { text: 'Expiration Date Descending', value: 'expirationDateDescending' },
    { text: 'Title A - Z', value: 'titleA-Z' },
    { text: 'Title Z - A', value: 'titleZ-A' },
    ]
  };



}
