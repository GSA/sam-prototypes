import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

import { NavigationMode } from '@gsa-sam/components';
import { SearchListLayoutComponent } from '@gsa-sam/layouts';

import { FeedItem } from '../services/interfaces/public-apis';
import { RequestsService } from '../services/feed-services/requests.service';
import { RequestFiltersComponent } from './request-filters/request-filters.component';

@Component({
  selector: 'sam-request',
  templateUrl: './request.component.html',
  styleUrls: ['./_styles.scss']
})
export class RequestComponent implements OnInit {

  domain: string;
  title: string = "Requests";
  placeholder: string = "e.g. role, john mason";

  @ViewChild('resultList', { static: true })
  resultList: SearchListLayoutComponent;

  @ViewChild('filters', { static: true })
  filters: RequestFiltersComponent;

  public filterChange$ = new Subject<object>();

  public subheader = {
    buttons: [],
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' }
    ]
  };

  constructor(public service: RequestsService) {  

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