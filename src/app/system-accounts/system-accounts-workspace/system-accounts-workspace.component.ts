import { Component, OnInit, AfterViewInit, Input, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';
import { SearchListLayoutComponent } from '@gsa-sam/layouts';

import { SystemAccountsFiltersComponent } from './system-accounts-filters.component';
import { SystemAccountsService } from '../../services/system-accounts-service/system-accounts.service';

@Component({
  selector: 'app-system-accounts-workspace',
  templateUrl: './system-accounts-workspace.component.html'
})
export class SystemAccountsWorkspaceComponent implements OnInit {

  title: string = 'System Accounts';
  placeholder: string = 'e.g. My System Account';
  accountData: any[];

  @ViewChild('resultList', { static: true })
  resultList: SearchListLayoutComponent;

  @ViewChild('filters', { static: true })
  filters: SystemAccountsFiltersComponent;

  public filterChange$ = new Subject<object>();

  public subheader = {
    buttons: [],
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' }
    ]
  };

  constructor(public service: SystemAccountsService) {  

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

  newAccount(event) {
  	console.log(`%cLog: Creating new account`, 'color: blue; font-weight: bold');
  }

  newSearch(event) {
  	console.log(`%cLog: Searching accounts`, 'color: blue; font-weight: bold');
  }

}
