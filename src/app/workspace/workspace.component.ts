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
  NavigationStart,

} from '@angular/router';
import { SDSAutocompletelConfiguration, SDSSelectedItemModel, SelectionMode } from '@gsa-sam/components';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { SamModelService } from '../model/sam-model.service';
import { WorkspaceModelService } from './service/workspace-model.service';
import { SideNavigationModel, NavigationMode, INavigationLink } from '@gsa-sam/components';
import { workspaceSideNavigationData } from './navigation/navigation.data';
// import { RegistrationFields } from './filter-config';
import { filter, map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { AutocompleteSampleDataService } from './entities/entity-service/autocomplete-sample.service';

import { WorkspaceConfigurations } from './config/workspace-config.data';
import { WorkspaceConfig } from './config/workspace-config.model';

@Component({
  selector: 'workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['_styles.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class WorkspaceComponent implements OnInit, AfterViewInit {
  form = new FormGroup({});
  workspaceConfigurations: Map<string, WorkspaceConfig> = WorkspaceConfigurations;
  filterModel = {};
  fields: FormlyFieldConfig[] = [];
  title: string = 'Workspace';

  public subheader = {
    buttons: [],
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' }
    ]
  };

  public settings = new SDSAutocompletelConfiguration();
  public autocompleteModel = new SDSSelectedItemModel();


public filterChange$ = new BehaviorSubject<object>(null);


  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private change: ChangeDetectorRef,
    public workspaceModel: WorkspaceModelService,
    public model: SamModelService,
    public autocompleteSampleDataService: AutocompleteSampleDataService
  ) {
    this.autoCompleteSetup() ;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Show loading indicator
        this.setFilters();
      }
    });
  }
  @ViewChild('sideNav') sideNav;

  ngOnInit() {

    this.setFilters();

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let itemCode = 'sideId';
          let child = this.route.firstChild;
          let searchedValue = null;
          if (this.route.snapshot.data && this.route.snapshot.data[itemCode]) {
            searchedValue = this.route.snapshot.data[itemCode];
          }
          while (child) {
            if (child.snapshot.data && child.snapshot.data[itemCode]) {
              searchedValue = child.snapshot.data[itemCode];
            }
            if (child.firstChild) {
              child = child.firstChild;
            } else {
              child = null;
            }
          }
          return searchedValue;
        })
      )
      .subscribe((customData: any) => {
        this.sideNav.select(customData);
      });

  }

  setFilters() {

    let domain = this.router.url.split('/').pop();
    if(domain !== null) {
      let config = this.workspaceConfigurations.get(domain);
      if (config) {
        this.fields = config.filters;
        this.title = config.title;
        return;
      }
    }
    this.title = 'Workspace';
    this.fields = [];
  }

  autoCompleteSetup() {
    this.settings.id = 'autocomplete1';
    this.settings.primaryKeyField = 'ueiDUNS';
    this.settings.primaryTextField = 'ueiDUNS';
    // this.settings.primaryKeyField = 'entityRegistration.ueiDUNS';
    // this.settings.primaryTextField = 'ueiDUNS';
    this.settings.labelText = 'Autocomplete 1';
    this.settings.selectionMode = SelectionMode.MULTIPLE;
    this.settings.autocompletePlaceHolderText = 'Enter text';
    this.settings.debounceTime = 0;
  }

  ngAfterViewInit() {
    this.change.detectChanges();
    this.workspaceModel.showNav = true;
  }

    public sideNavModel: SideNavigationModel = workspaceSideNavigationData;

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
}
