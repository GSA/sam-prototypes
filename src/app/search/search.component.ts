import { ViewChild, Component, OnInit, Input, ChangeDetectorRef, AfterViewInit, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, NavigationEnd, UrlSegment, NavigationStart, NavigationExtras } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import {allIcons} from 'ngx-bootstrap-icons';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { CdkAccordionItem } from "@angular/cdk/accordion";

import { SideNavigationModel, NavigationMode, INavigationLink, SdsDialogService, SDS_DIALOG_DATA } from '@gsa-sam/components';
import { SearchListConfiguration } from '@gsa-sam/layouts';

import { SearchService } from '../services/search-service/search.service';

import { navigationConfig } from './navigate.config';
import { resultsListConfigMap } from './results-list.config';

import { AdvancedFiltersComponent } from './search-filters/advanced-filters/advanced-filters.component';
import { AllDomainFiltersService } from './search-filters/all-domain-filters/all-domain-filters.service';
import { ContractOpportunityFiltersService } from './search-filters/contract-opportunity-filters/contract-opportunity-filters.service';
import { AssistanceFiltersService } from './search-filters/assistance-filters/assistance-filters.service';
import { EntityRegistrationFiltersService } from './search-filters/entity-registration-filters/entity-registration-filters.service';
import { EntityInformationFiltersService } from './search-filters/entity-information-filters/entity-information-filters.service';
import { DisasterResponseFiltersService } from './search-filters/disaster-response-filters/disaster-response-filters.service';
import { ExclusionFiltersService } from './search-filters/exclusion-filters/exclusion-filters.service';
import { ContractDataFiltersService } from './search-filters/contract-data-filters/contract-data-filters.service';
import { IntegrityFiltersService } from './search-filters/integrity-filters/integrity-filters.service';
import { ScaFilterService } from './search-filters/sca-filter-service/sca-filter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: []
})
export class SearchComponent implements OnInit {

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

  @ViewChild('resultList', { static: true }) resultList;

  parentDomain: any;
  domain: any;
  form = new FormGroup({});
  filterModel = {};
  fields: FormlyFieldConfig[] = [];
  showAdvancedFilters: boolean = false;

  domainLabelMap: Map<string, string> = new Map<string, string>([
    ['opportunities', 'Contract Opportunities'],
    ['contractdata', 'Contract Data'],
    ['assistancelist', 'Assistance Listings'],
    ['entityinfo', 'Entity Information'],
    ['registrations', 'Entity Registrations'],
    ['disasterresponse', 'Disaster Response Registry'],
    ['exclusions', 'Exclusions'],
    ['hierarchy', 'Federal Hierarchy'],
    ['wdid', 'Wage Determinations by ID'],
    ['dba', 'Construction WDs (DBA)'],
    ['sca', 'Service WDs (SCA)']
  ]);

  domainExpanded: boolean = false;
  subdomainExpanded: boolean = false;
  filtersExpanded: boolean = true;

  public filterChange$ = new BehaviorSubject<object>(null);

  constructor(
    public service: SearchService,
    private route: ActivatedRoute,
    public router: Router,
    private location: Location,
    private change: ChangeDetectorRef,
    public dialog: SdsDialogService,
    private allDomainFiltersService: AllDomainFiltersService,
    private opportunityFilterService: ContractOpportunityFiltersService,
    private assistanceFiltersService: AssistanceFiltersService,
    private registrationFilterService: EntityRegistrationFiltersService,
    private entityinfoFilterService: EntityInformationFiltersService,
    private integrityFilterService: IntegrityFiltersService,
    private disasterFilterService: DisasterResponseFiltersService,
    private exclusionFilterService: ExclusionFiltersService,
    private contractDataFilterService:  ContractDataFiltersService,
    private scaFilterService: ScaFilterService) {

  }

  ngOnInit() {
    let domain = this.route.snapshot.queryParamMap.get('index');
    this.domain = this.getDomain(this.navigationModel.navigationLinks, domain ? domain : 'all');
    this.service.setDomain(this.domain.id);
    if(this.parentDomain == null) {
        this.parentDomain = this.domain;
    }
    this.listModel = resultsListConfigMap.get(this.domain.id);
    this.setFilters();
  }

  ngAfterViewInit() {
    this.route.queryParams.subscribe(
      data => {
        this.filtersExpanded = true;
        this.domainExpanded = false;
        let domain = typeof data['index'] === "string" ? decodeURI(data['index']) : 'all';
        this.parentDomain = null;
        this.domain = this.getDomain(this.navigationModel.navigationLinks, domain ? domain : 'all');
        if(this.parentDomain == null) {
           this.parentDomain = this.domain;
        }
        this.service.setDomain(this.domain.id);
        this.listModel = resultsListConfigMap.get(this.domain.id);
        this.setFilters();
        if(this.resultList) {
          this.resultList.updateFilter(this.filterModel);
        }
      });
    this.change.detectChanges();
    if(this.resultList) {
        this.resultList.updateFilter(this.filterModel);
    }
  }

  setFilters() {
      let filterService = this.filterServiceMap.get(this.domain.id);
      if(filterService) {
          this.fields = filterService.filters;
          this.filterModel = filterService.model;
      } else {
          this.fields = [];
          this.filterModel = {};
      }
      this.showAdvancedFilters = (this.domain.id === 'opportunities') ? true : false;
  }

  subheaderActionClicked(event) {
    console.log(`%cLog: ${event}`, 'color: blue; font-weight: bold');
  }

  setIndex(index: string) {
      this.service.setDomain(index);
      this.listModel = resultsListConfigMap.get(index);
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

  back() {
      this.location.back();
  }


  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }

  getDomain(parent: any[], id: string) : any {
    let foundResult: any = null;
    for(let i=0; i<parent.length; i++) {
      if(parent[i].id == id) {
        return parent[i];
      }
      if(parent[i].children) {
          foundResult = this.getDomain(parent[i].children, id);
          if(foundResult) {
              this.parentDomain = parent[i];
              return foundResult;
          }
      }
    }
    return foundResult;
  }


  search() {
     this.router.navigate(['/search'], { queryParams: { index: this.service.domain, keyword: 'hello' } });
  }

  public navigationModel: SideNavigationModel = navigationConfig;
  public listModel: SearchListConfiguration;
  public filterServiceMap = new Map([
      ['all', this.allDomainFiltersService],
      ['opportunities', this.opportunityFilterService],
      ['assistancelist', this.assistanceFiltersService],
      ['registrations', this.registrationFilterService],
      ['entityinfo', this.entityinfoFilterService],
      ['disasterresponse', this.disasterFilterService],
      ['exclusions', this.exclusionFilterService],
      ['integrity', this.integrityFilterService],
      ['contractdata', this.contractDataFilterService],
      ['sca', this.scaFilterService]
  ]);

}
