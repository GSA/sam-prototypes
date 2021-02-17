import { ViewChild, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { SideNavigationModel, SdsDialogService, SdsDialogRef } from '@gsa-sam/components';
import { SearchListConfiguration, SearchListLayoutComponent } from '@gsa-sam/layouts';

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

  @ViewChild('resultList', { static: true }) resultList: SearchListLayoutComponent;

  parentDomain: any;
  domain: any;
  initialDomain: any;
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

  isMobileMode: boolean;
  responsiveDialog: SdsDialogRef<any>;
  
  /**
   * stores snapshot of data before user opens filter options
   * in responsive view dialog. This allows us to reset the values
   * back should the user decide to cancel
   */
  preResponsiveDialogOpenSnapshot = {
    filterModel: undefined,
    domain: undefined
  };

  public filterChange$ = new Subject<object>();

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
    this.initialDomain = this.domain;
    this.service.setDomain(this.domain.id);
    this.listModel = resultsListConfigMap.get(this.domain.id) ? resultsListConfigMap.get(this.domain.id) : resultsListConfigMap.get('all');
    this.setFilters();

    this.filterChange$.subscribe((res) => {
      this.filterModel = res;
      this.resultList.updateFilter(res);
    });
  }

  setFilters() {
      let filterService = this.filterServiceMap.get(this.domain.id);
      if(filterService) {
          this.fields = filterService.filters;
      } else {
          this.fields = this.filterServiceMap.get('all').filters;
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

  /**
   * Emitted by sds-selection-panel component anytime there is a change
   * in navigation item. For us, this means there is a change in domain, 
   * so we update our formly fields accordingly based on new domain
   * @param $event 
   */
  onPanelSelection($event) {
    this.domain = {...$event};
    this.filtersExpanded = true;
    this.domainExpanded = false;
    this.listModel = resultsListConfigMap.get(this.domain.id) ? resultsListConfigMap.get(this.domain.id) : resultsListConfigMap.get('all');
    this.setFilters();
    if(this.resultList) {
      this.resultList.updateSearchResultsModel({filterModel: this.filterModel});
    }
  }

  /**
   * Event fired when a dialog is opened or closed by the sds-side-toolbar component.
   * The dialog opens when the user clicks on 'Advanced Search' button in responsive view.
   * It is automatically closed by the toolbar if the user changes screen size such that
   * they are no longer in responsive view. In such a case, we consider that action
   * as a cancel. In both cases - whether the user clicks cancel or apply, it is on application
   * side to close the dialog
   * @param $event - reference of the opened dialog. Undefined if closed
   */
  onDialogChange($event: SdsDialogRef<any>) {
    this.responsiveDialog = $event;
    if ($event) {
      // Let the dialog completely open and initialize values before taking snapshot of state
      $event.afterOpened().toPromise().then(() => {
        this.preResponsiveDialogOpenSnapshot.filterModel = {...this.filterModel};
        this.preResponsiveDialogOpenSnapshot.domain = {...this.domain};
      })

    } else {
      // Dialog closed due to window resize - reset state
      this.filterModel = this.preResponsiveDialogOpenSnapshot.filterModel;
      this.domain = this.preResponsiveDialogOpenSnapshot.domain;

      // Programatically reset domain for selection panel
      this.initialDomain = this.domain;
      this.resultList.updateSearchResultsModel({filterModel: this.filterModel});
    }
  }

  /**
   * Applies current filter and domain changes when 'Apply' button
   * is clicked on responsive dialog
   */
  onApplyFilter() {

    this.responsiveDialog.close();

    this.responsiveDialog = undefined;

    // Perform domain navigation first, then the filter update. This way one route navigation does not cancel the other
    this.router.navigate([], {
      queryParams: this.domain.queryParams,
      relativeTo: this.route
    }).then(() => {
      // Internally does a route navigation
      this.resultList.updateSearchResultsModel({filterModel: this.filterModel});
    });
  }

  /**
   * Back button on responsive dialog was clicked
   */
  onCancelClicked() {
    this.filterModel = this.preResponsiveDialogOpenSnapshot.filterModel;
    this.domain = this.preResponsiveDialogOpenSnapshot.domain;
    this.responsiveDialog.close();
    this.responsiveDialog = undefined;

    this.resultList.updateSearchResultsModel({filterModel: this.filterModel});

  }

}
