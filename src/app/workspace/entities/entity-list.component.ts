import { Component, OnInit, Input, ViewChild, ChangeDetectorRef } from '@angular/core';

import { EntityService } from './entity-service/entity.service';
import { SearchListConfiguration } from '@gsa-sam/layouts';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { filter, map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { registrationFilters } from './filters.config';

import { workspaceSideNavigationData } from '../../common/workspace/navigation.data';

@Component({
  selector: 'entity-workspace',
  templateUrl: './entity-list.component.html'
  //,  styleUrls: ['./_styles.scss']
})
export class EntityListComponent implements OnInit {

  subheader = {
    actions: [
      { id: 'downloadAction', icon: 'downloadAction', text: 'Download' }
    ]
  };

  navigationModel = workspaceSideNavigationData;

  @ViewChild('resultList') resultList;

  form = new FormGroup({});

  model = {};

  filters = registrationFilters;

  showFilters: boolean = true;

  public filterChange$ = new BehaviorSubject<object>(null);

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

  ngOnInit() {
  }

  ngAfterViewInit() {      
    this.change.detectChanges();
  }

  subheaderActionClicked(action) {

  }

  newAccount(event) {
    console.log(`%cLog: Creating new account`, 'color: blue; font-weight: bold');
  }

  newSearch(event) {
    console.log(`%cLog: Searching accounts`, 'color: blue; font-weight: bold');
  }

}
