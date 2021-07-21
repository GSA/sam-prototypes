import { Component, OnInit, AfterViewInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';
import { SearchListLayoutComponent } from '@gsa-sam/layouts';

import { FeedItem } from '../services/interfaces/public-apis';
import { NotificationFiltersComponent } from './notification-filters/notification-filters.component';
import { NotificationsService } from '../services/feed-services/notifications.service';

@Component({
  selector: 'notifications',
  templateUrl: './notifications.component.html'
})
export class NotificationsComponent implements OnInit, AfterViewInit {

  title: string = 'Notifications';
  placeholder: string = '';
  notifications: FeedItem[];

  @ViewChild('resultList', { static: true })
  resultList: SearchListLayoutComponent;

  @ViewChild('filters', { static: true })
  filters: NotificationFiltersComponent;

  public filterChange$ = new Subject<object>();

  public subheader = {
    buttons: [],
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' }
    ]
  };

  constructor(public service: NotificationsService) {  

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