import { ViewChild, Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute, Router, NavigationEnd, UrlSegment, NavigationStart, NavigationExtras } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { SearchListConfiguration } from '@gsa-sam/layouts';
import { SearchService } from '../../services/search-service/search.service';

import { resultsListConfigMap } from '../results-list.config';

@Component({
  selector: 'app-search-builder',
  templateUrl: './search-builder.component.html',
  styleUrls: ['./search-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBuilderComponent implements OnInit {

  public subheaderSearchModel: {};

  public subheaderSearchSettings = {
    placeholder: 'Enter an ID or keyword'
  }

  public subheaderActions = {
    buttons: [],
    actions: [
      { id: 'downloadAction', icon: 'bars', text: 'Download' },
      { id: 'saveAction', icon: 'bars', text: 'Save' },
      { id: 'saveAsAction', icon: 'bars', text: 'Save As' }
    ]
  };

  filterModel = {};

  listConfig: SearchListConfiguration = {
	  defaultSortValue: "relevanceDescending",
	  pageSize: 25,
	  sortList:
	    [
	      { text: "Relevance", value: "relevanceDescending" }
	    ]
  };

  @ViewChild('resultList', { static: true }) resultList;

  public filterChange$ = new BehaviorSubject<object>(null);

  constructor(public service: SearchService,
    private route: ActivatedRoute,
    public router: Router,
    private location: Location,
    private change: ChangeDetectorRef) { 
    	this.service.setDomain("all");
    }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.change.detectChanges();
    if(this.resultList) {
        this.resultList.updateFilter(this.filterModel);
    }
  }

  search() {

  }

  log(event) {

  }

  back() {
      this.location.back();
  }

}
