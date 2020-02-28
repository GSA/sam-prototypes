import {
  ViewChild,
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  AfterViewInit,
  ChangeDetectionStrategy,
  OnChanges
} from '@angular/core';

import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  UrlSegment,
  NavigationStart
} from '@angular/router';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { SideNavigationModel, NavigationMode, INavigationLink, SdsDialogService, SDS_DIALOG_DATA } from '@gsa-sam/components';
import { SearchListConfiguration } from '@gsa-sam/layouts';

import { filter, map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { SearchService } from './search-service/search.service';

import { navigationConfig } from './navigate.config';
import { listConfigMap, filterConfigMap } from './filters.config';

import { AdvancedFiltersComponent } from './advanced-filters/advanced-filters.component';
import { AllDomainFiltersService } from './all-domain-filters/all-domain-filters.service';
import { OpportunityFilterService } from './opportunity/opportunity-filter-service/opportunity-filter.service';
import { AssistanceFiltersService } from './assistance/assistance-filters/assistance-filters.service';

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.scss']
})
export class SearchHomeComponent implements OnInit {
  
  @ViewChild('resultList') resultList;

  form = new FormGroup({});
  filterModel = {};
  fields: FormlyFieldConfig[] = [];

  showFilters: boolean = true;

  public filterChange$ = new BehaviorSubject<object>(null);

  public subheaderActions = {
    buttons: [],
    actions: [
      { id: 'downloadAction', icon: 'bars', text: 'Download' },
      { id: 'saveAction', icon: 'bars', text: 'Save' },
      { id: 'saveAsAction', icon: 'bars', text: 'Save As' }
    ]
  };

  constructor(
    public service: SearchService,
    private route: ActivatedRoute,
    public router: Router,
    private change: ChangeDetectorRef,
    public dialog: SdsDialogService,
    private allDomainFiltersService: AllDomainFiltersService,
    private opportunityFilterService: OpportunityFilterService,
    private assistanceFiltersService: AssistanceFiltersService) { 

  }

  ngOnInit() {
      let domain = this.route.snapshot.queryParamMap.get('index');
      if(domain) {
        this.listModel = listConfigMap.get(domain);
      } else {
        this.listModel = listConfigMap.get('all');
      }
  }

  ngAfterViewInit() {
  	this.change.detectChanges();
  	this.route.queryParams.subscribe(
      data => {
        this.setDomain(typeof data['index'] === "string" ? decodeURI(data['index']) : 'all');
      });
  }

  setDomain(domain: string) {
    if(domain != this.service.domain) {
        let model = {};
        this.listModel = listConfigMap.get(domain);
        let filterService = this.filterServiceMap.get(domain);
        if(filterService) {
            this.fields = filterService.filters;
            model = filterService.model;
        }
        this.service.domain = domain;
        this.resultList.updateFilter(model);
    }
  }

  subheaderActionClicked(event) {
  	console.log(`%cLog: ${event}`, 'color: blue; font-weight: bold');
  }

  setIndex(index: string) {
      this.service.domain = index;
      this.listModel = listConfigMap.get(index);
  }

  resetAll() {
  	this.filterModel = {};
  }

  openAdvancedFiltersDialog() {
	    const dialogRef = this.dialog.open(AdvancedFiltersComponent, {
	      width: 'medium',
	      data: { title: "Advanced Filters", content: this.fields }
	    });
  }

  openDownloadDialog() {

  }

  openSaveDialog() {


  }

  openSaveAsDialog() {

  }


  newSearch(value) {
  	console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }

  public navigationModel: SideNavigationModel = navigationConfig;
  public listModel: SearchListConfiguration;
  public filterServiceMap = new Map([
      ['all', this.allDomainFiltersService],
      ['opportunities', this.opportunityFilterService],
      ['assistancelist', this.assistanceFiltersService]
  ]);

}
