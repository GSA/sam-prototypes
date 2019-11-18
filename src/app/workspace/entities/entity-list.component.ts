import { Component, OnInit, Input } from '@angular/core';

import { EntityService } from './entity-service/entity.service';
import { SearchListConfiguration } from '@gsa-sam/layouts';
@Component({
  selector: 'entity-workspace',
  templateUrl: './entity-list.component.html'
  //,  styleUrls: ['./_styles.scss']
})
export class EntityListComponent implements OnInit {



  constructor(public service: EntityService) {

  }

  configuration: SearchListConfiguration = {
    defaultSortValue: 'expirationDateAscending', pageSize: 25,
    sortList: [{ text: 'Expiration Date Ascending', value: 'expirationDateAscending' },
    { text: 'Expiration Date Descending', value: 'expirationDateDescending' },
    { text: 'Title A - Z', value: 'titleA-Z' },
    { text: 'Title Z - A', value: 'titleZ-A' },
    ]

  };



  ngOnInit() {
  }

}
