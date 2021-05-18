import { Component, OnInit, AfterViewInit, Input, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';
import { SearchListLayoutComponent } from '@gsa-sam/layouts';

import { FederalHierarchyFiltersComponent } from './federal-hierarchy-filters.component';
import { HierarchyService } from '../services/hierarchy-service/hierarchy.service';


@Component({
  selector: 'federal-hierarchy',
  templateUrl: './federal-hierarchy.component.html'
})
export class FederalHierarchyComponent implements OnInit {

  title: string = 'Federal Hierarchy';
  placeholder: string = 'e.g. FJSVRC, Office of Finance';
  hierarchyData: any[];


  @ViewChild('resultList', { static: true })
  resultList: SearchListLayoutComponent;

  @ViewChild('filters', { static: true })
  filters: FederalHierarchyFiltersComponent;

  public filterChange$ = new Subject<object>();

  public subheader = {
    buttons: [],
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' }
    ]
  };

  constructor(public service: HierarchyService) {  

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