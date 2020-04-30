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
import { CdkAccordionItem } from "@angular/cdk/accordion";
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
import { RegistrationFilterService } from './entity-info/entity-filter-service/registration-filter.service';
import { EntityinfoFilterService } from './entity-info/entity-filter-service/entityinfo-filter.service';
import { DisasterFilterService } from './entity-info/entity-filter-service/disaster-filter.service';
import { ExclusionFilterService } from './entity-info/entity-filter-service/exclusion-filter.service';
import { ContractDataFiltersService } from './contract-data/contract-data-filters/contract-data-filters.service';
import { ScaFilterService } from './wages/sca-filter-service/sca-filter.service';

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

  domainLabelMap: Map<string, string> = new Map<string, string>([
    ['opportunities', 'Contract Opportunities'],
    ['contractdata', 'Contract Data'],
    ['assistancelist', 'Assistance Listings'],
    ['registrations', 'Entity Registrations'],
    ['disasterresponse', 'Disaster Response Registry'],
    ['exclusions', 'Exclusions'],
    ['wdid', 'Wage Determinations by ID'],
    ['dba', 'Construction WDs (DBA)'],
    ['sca', 'Service WDs (SCA)']
  ]);

  showFilters: boolean = true;
  domainLabel: string = "All";
  domainExpanded: boolean = false;
  filtersExpanded: boolean = true;
  @ViewChild('domainAccordion')
    domainAccordion: CdkAccordionItem;
  @ViewChild('filtersAccordion')
    filtersAccordion: CdkAccordionItem;

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
    private assistanceFiltersService: AssistanceFiltersService,
    private registrationFilterService: RegistrationFilterService,
    private entityinfoFilterService: EntityinfoFilterService,
    private disasterFilterService: DisasterFilterService,
    private exclusionFilterService: ExclusionFilterService,
    private contractDataFilterService:  ContractDataFiltersService,
    private scaFilterService: ScaFilterService) { 

  }

  ngOnInit() {    
    let domain = this.route.snapshot.queryParamMap.get('index');
    this.listModel = listConfigMap.get(domain ? domain : 'all');
  }

  ngAfterViewInit() {      

    this.change.detectChanges();
    let domain = this.route.snapshot.queryParamMap.get('index');
    this.setDomain(domain);
  	this.route.queryParams.subscribe(
      data => {
        this.listModel = listConfigMap.get(domain ? domain : 'all');
        this.setDomain(typeof data['index'] === "string" ? decodeURI(data['index']) : 'all');
      });
  }

  setDomain(domain: string) {
      let filterService = this.filterServiceMap.get(domain ? domain : 'all');
      if(filterService) {
          this.fields = filterService.filters;
          this.filterModel = filterService.model;
      } else {
          this.fields = [];
          this.filterModel = {};
      }
      let label = this.domainLabelMap.get(domain);
      this.domainLabel = label ? label : 'All Domains';
      if(this.domainAccordion.expanded) {
        this.domainAccordion.toggle();
      }
      if(!this.filtersAccordion.expanded) {
        this.filtersAccordion.toggle();
      }
      this.service.setDomain(domain ? domain : 'all');
      this.resultList.updateFilter(this.filterModel);
  }

  subheaderActionClicked(event) {
  	console.log(`%cLog: ${event}`, 'color: blue; font-weight: bold');
  }

  setIndex(index: string) {
      this.service.setDomain(index);
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
      ['assistancelist', this.assistanceFiltersService],
      ['registrations', this.registrationFilterService],
      ['entityinfo', this.entityinfoFilterService],
      ['disasterresponse', this.disasterFilterService],
      ['exclusions', this.exclusionFilterService],
      ['contractdata', this.contractDataFilterService],
      ['sca', this.scaFilterService]
  ]);

}
