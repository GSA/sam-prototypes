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
import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';
import { workspaceSideNavigationData } from './navigation/navigation.data';
// import { RegistrationFields } from './filter-config';
import { filter, map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { AutocompleteSampleDataService } from './entities/entity-service/autocomplete-sample.service';

@Component({
  selector: 'workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['_styles.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class WorkspaceComponent implements OnInit, AfterViewInit {
  form = new FormGroup({});
  filterModel = {};
  fields: FormlyFieldConfig[] = [];

  public subheader = {
    buttons: [],
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' }
    ]
  };

  public settings = new SDSAutocompletelConfiguration();
  public autocompleteModel = new SDSSelectedItemModel();

  public registrationFields: FormlyFieldConfig[] = [
  {
    key: 'searchKeyword',
    wrappers: ['accordionwrapper'],
    templateOptions: { label: 'Keyword' },
    fieldGroup: [{
      key: 'keyword',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Keyword',
      },

    }]
  },

  {
    key: 'searchEntity',
    wrappers: ['accordionwrapper'],
    templateOptions: { label: 'Entity' },
    fieldGroup: [
      {
        key: 'legalBusinessName',
        type: 'input',
        templateOptions: {
          label: 'Entity Name',
          placeholder: '',
          inputType: 'text',
        },
      },
      {
        key: 'ueiSAM',
        type: 'input',
        templateOptions: {
          label: 'Unique Entity ID (SAM)',
          placeholder: '',
          inputType: 'text',
          inputStyle: 'error',
        },
      },
      {
        key: 'cageCode',
        type: 'input',
        templateOptions: {
          label: 'CAGE/NCAGE',
          placeholder: '',
          inputType: 'text',
        },
      },

      {
        key: 'ueiDUNS',
        type: 'autocomplete',
        templateOptions: {
          label: 'Unique Entity ID (DUNS)',
          service: this.autocompleteSampleDataService,
          configuration: this.settings,
          model: this.autocompleteModel,
        },
      }
    ],
  },
  {
    key: 'registration',
    wrappers: ['accordionwrapper'],
    templateOptions: { label: 'Status' },
    fieldGroup: [
      {
        key: 'registrationStatus',
        type: 'multicheckbox',
        templateOptions: {
          options: [
            {
              key: 'Active',
              value: 'Active'
            },
            {
              key: 'Draft',
              value: 'Draft'
            },
            {
              key: 'Expired',
              value: 'Expired'
            },
            {
              key: 'InProgress',
              value: 'In Progress'
            }
          ]
        },
      }
    ]
  },
  {
    key: 'expiration',
    wrappers: ['accordionwrapper'],
    templateOptions: { label: 'Expiration Date' },
    fieldGroup: [
      {
        key: 'expirationDate',
        type: 'radio',
        templateOptions: {
          options: [
            { label: '30 Days', value: '30' },
            { label: '60 Days', value: '60' },
            { label: '90 Days', value: '90' },
            { label: 'None', value: '0' },

          ]
        },
      }
    ]
  }
];


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
        const domain = this.router.url.split('/').pop();
        if (domain === 'registrations') {
          this.fields = this.registrationFields;
        } else {
          this.fields = [];
        }
      }
    });

  }
  @ViewChild('sideNav') sideNav;

  ngOnInit() {
    const str = this.router.url.split('/').pop();
    if (str == 'registrations') {
      this.fields = this.registrationFields;
    }
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
