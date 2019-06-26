import {
  ViewChild,
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  AfterViewInit,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  UrlSegment
} from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { SamModelService } from '../model/sam-model.service';
import { WorkspaceModelService } from './service/workspace-model.service';
import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';
import { workspaceSideNavigationData } from './navigation/navigation.data';
import { filter, map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['_styles.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class WorkspaceComponent implements OnInit, AfterViewInit {
  form = new FormGroup({});
  filterModel = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'searchKeyword',
      wrappers: ['accordianwrapper'],
      templateOptions: { label: 'Search by Keyword' },
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
      wrappers: ['accordianwrapper'],
      templateOptions: { label: 'Search by Entity' },
      fieldGroup: [
        {
          key: 'legalBusinessName',
          type: 'input',
          templateOptions: {
            label: 'Legal Business Name',
            placeholder: '',
            inputType: 'text',
          },
        },
        {
          key: 'uniqueEntityIdSam',
          type: 'input',
          templateOptions: {
            required: true,
            label: 'Unique Entity ID (SAM)',
            placeholder: '',
            min: 13,
            max: 40,
            inputType: 'number',
            inputStyle: 'error',
          },
        },
        {
          key: 'cageNcge',
          type: 'input',
          templateOptions: {
            label: 'CAGE/NCAGE',
            placeholder: '',
            inputType: 'text',
          },
        },
        {
          key: 'uniqueEntityIdDuns',
          type: 'input',
          templateOptions: {
            required: true,
            label: 'Unique Entity ID (DUNS)',
            placeholder: '',
            min: 13,
            max: 40,
            inputType: 'number',
            inputStyle: 'error',
          },
        }
      ],
    },
    {
      key: 'status',
      wrappers: ['accordianwrapper'],
      templateOptions: { label: 'Status' },
      fieldGroup: [
        {
          key: 'statusCheckbox',
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
      key: 'expirationDate',
      wrappers: ['accordianwrapper'],
      templateOptions: { label: 'Expiration Date' },
      fieldGroup: [
        {
          key: 'expirationDateOption',
          type: 'radio',
          templateOptions: {
            options: [
              { label: '30 Days', value: '30' },
              { label: '60 Days', value: '60' },
              { label: '90 Days', value: '90' },

            ]
          },
        }
      ]
    },
    {
      key: 'addressUpdate',
      wrappers: ['accordianwrapper'],
      templateOptions: { label: 'Address Update' },
      fieldGroup: [
        {
          key: 'addressUpdateOption',
          type: 'radio',
          templateOptions: {
            options: [
              { label: 'Update Required', value: 'adrupr' },
              { label: 'Update Not Required', value: 'adrupn' },

            ]
          },
        }
      ]
    }
  ];

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private change: ChangeDetectorRef,
    public workspaceModel: WorkspaceModelService,
    public model: SamModelService
  ) {}
  @ViewChild('sideNav') sideNav;

  ngOnInit() {
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

  ngAfterViewInit() {
    this.change.detectChanges();
  }
  public sideNavModel: SideNavigationModel = workspaceSideNavigationData;

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
}
