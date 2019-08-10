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
import { FormlyFieldConfig } from '@ngx-formly/core';
import { SamModelService } from '../model/sam-model.service';
import { WorkspaceModelService } from './service/workspace-model.service';
import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';
import { workspaceSideNavigationData } from './navigation/navigation.data';
import { RegistrationFields } from './filter-config';
import { filter, map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

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
  
  public filterChange$ = new BehaviorSubject<object>(null);


  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private change: ChangeDetectorRef,
    public workspaceModel: WorkspaceModelService,
    public model: SamModelService
  ) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Show loading indicator
        const domain = this.router.url.split('/').pop();
        if (domain === 'registrations') {
          this.fields = RegistrationFields;
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
      this.fields = RegistrationFields;
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

  ngAfterViewInit() {
    this.change.detectChanges(); 
    this.workspaceModel.showNav = true;
  }

  public sideNavModel: SideNavigationModel = workspaceSideNavigationData;

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
}
