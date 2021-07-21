import { Component, OnInit, AfterViewInit, Input, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';
import { SearchListLayoutComponent } from '@gsa-sam/layouts';

import { EntityRegistrationFiltersComponent } from './entity-registration-filters.component';
import { EntityRegistrationService } from '../../services/entity-registration-service/entity-registration.service';

@Component({
  selector: 'entity-registration-workspace',
  templateUrl: './entity-registration-workspace.component.html'
})
export class EntityRegistrationWorkspaceComponent implements OnInit {

  title: string = 'Entity Registrations';
  placeholder: string = 'e.g. FH4RTH99RFTW, Advanced Corporation';
  entityData: any[];


  @ViewChild('resultList', { static: true })
  resultList: SearchListLayoutComponent;

  @ViewChild('filters', { static: true })
  filters: EntityRegistrationFiltersComponent;

  public filterChange$ = new Subject<object>();

  public subheader = {
    buttons: [],
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' }
    ]
  };

  constructor(public service: EntityRegistrationService) {  

  }

  ngOnInit() {
    this.filterChange$.subscribe((res) => {
      this.resultList.updateFilter(res);
    });
  }

  ngAfterViewInit() {
    this.resultList.updateFilter(this.filters.filterModel);
  }

  onApplyFilters() {
	  this.resultList.updateSearchResultsModel({filterModel: this.filters.filterModel});
  }

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }

}

