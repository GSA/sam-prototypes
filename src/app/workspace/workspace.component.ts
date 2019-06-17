import { Component, OnInit, Input, ChangeDetectorRef, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, UrlSegment } from '@angular/router';
import { SamModelService } from '../model/sam-model.service';
import { WorkspaceModelService } from './service/workspace-model.service';
import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

@Component({
  selector: 'workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['_styles.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class WorkspaceComponent implements OnInit, AfterViewInit {

  constructor(private change: ChangeDetectorRef, private route: ActivatedRoute, private router: Router, public workspaceModel: WorkspaceModelService, public model: SamModelService) {
  }

  setView(view: string) {
    this.workspaceModel.view = view;
  }


  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('NavigationEnd event', event);
      }
    })
  }

  ngAfterViewInit() {
    console.log(this.sideNav);
    this.change.detectChanges();
  }
  public sideNav: SideNavigationModel = {
    navigationLinks: [
      { id: 'workspacehome', text: 'Workspace Home', mode: NavigationMode.INTERNAL, route: '/workspace' },
      {
        id: 'contracting', text: 'Contracting', mode: NavigationMode.INTERNAL, route: '/workspace', children: [
          { id: 'contractOpportunityForecasts', text: 'Contract Opportunity Forecasts', mode: NavigationMode.INTERNAL, route: '/workspace/contractopportunities' },
          { id: 'contractOpportunites', text: 'Contract Opportunities', mode: NavigationMode.INTERNAL, route: '/workspace/contractopportunities' },
          { id: 'contractData', text: 'Contract Data', mode: NavigationMode.INTERNAL, route: '/workspace/contractdata' }

        ]
      }
    ]
  };


  //   <ul class="usa-sidenav">

  //   <li>
  //     <a [class.usa-current]="workspaceModel.isPageInDomain('contractinginfo')" [routerLink]="['/workspace']"
  //       [queryParams]="{}">Contracting</a>
  //     <ul class="usa-sidenav-sublist">
  //       <li class="usa-sidenav-item"><a [class.usa-current]="workspaceModel.page == 'contractopportunities'"
  //           [routerLink]="['/workspace/contractopportunities']" [queryParams]="{}">Contract Opportunity
  //           Forecasts</a></li>
  //       <li class="usa-sidenav-item"><a [class.usa-current]="workspaceModel.page == 'contractopportunities'"
  //           [routerLink]="['/workspace/contractopportunities']" [queryParams]="{}">Contract Opportunities</a></li>
  //       <li class="usa-sidenav-item"><a [class.usa-current]="workspaceModel.page == 'contractdata'"
  //           [routerLink]="['/workspace/contractdata']" [queryParams]="{}">Contract Data</a></li>
  //     </ul>
  //   </li>
  //   <li class="usa-sidenav-item">
  //     <a [class.usa-current]="workspaceModel.isPageInDomain('assistancelist')"
  //       [routerLink]="['/workspace/fal/dashboard']" [queryParams]="{}">Federal Assistance</a>
  //     <ul class="usa-sidenav-sublist">
  //       <li class="usa-sidenav-item"><a [class.usa-current]="workspaceModel.page === 'assistancelist'"
  //           [routerLink]="['/workspace/fal/assistancelist']" [queryParams]="{}">Assistance Listings</a></li>
  //       <li class="usa-sidenav-item"><a [class.usa-current]="workspaceModel.page === 'cfdanumber'"
  //           [routerLink]="['/workspace/fal/cfdanumber']" [queryParams]="{}">CFDA Numbers</a></li>
  //       <li class="usa-sidenav-item"><a [class.usa-current]="workspaceModel.page === 'regionallocation'"
  //           [routerLink]="['/workspace/fal/regionallocation']" [queryParams]="{}">Regional Locations</a></li>
  //     </ul>
  //   </li>
  //   <li class="usa-sidenav-item">
  //     <a [class.usa-current]="workspaceModel.isPageInDomain('entityinfo')"
  //       [routerLink]="['/workspace/entities/dashboard']" [queryParams]="{domain:'entityinfo'}">Entity
  //       Information</a>
  //     <ul class="usa-sidenav-sublist">
  //       <li class="usa-sidenav-item"><a [class.usa-current]="workspaceModel.page == 'registrations'"
  //           [routerLink]="['/workspace/registrations']" [queryParams]="{}">Entity Registrations</a></li>
  //       <li class="usa-sidenav-item"><a [class.usa-current]="workspaceModel.page == 'exclusions'"
  //           [routerLink]="['/workspace/exclusions']" [queryParams]="{}">Exclusions</a></li>
  //       <li class="usa-sidenav-item"><a [class.usa-current]="workspaceModel.page == 'integrityinfo'"
  //           [routerLink]="['/workspace/integrity']" [queryParams]="{}">Integrity Information</a></li>
  //     </ul>
  //   </li>
  //   <li class="usa-sidenav-item">
  //     <a [class.usa-current]="workspaceModel.isPageInDomain('compliance')"
  //       [routerLink]="['/workspace/compliance/dashboard']" [queryParams]="{}">Compliance</a>
  //     <ul class="usa-sidenav-sublist">
  //       <li class="usa-sidenav-item"><a [class.usa-current]="workspaceModel.page == 'pastperformance'"
  //           [routerLink]="['/workspace/compliance/pastperformance']" [queryParams]="{domain:'registration'}">Past
  //           Performance</a></li>
  //       <li class="usa-sidenav-item"><a [class.usa-current]="workspaceModel.page == 'ffatasubaward'"
  //           [routerLink]="['/workspace/ffatasubaward']" [queryParams]="{}">FFATA Sub-Awards</a></li>
  //       <li class="usa-sidenav-item"><a [class.usa-current]="workspaceModel.page == 'far19subaward'"
  //           [routerLink]="['/workspace/far19subaward']" [queryParams]="{}">FAR 19 Sub-Awards</a></li>
  //       <li class="usa-sidenav-item"><a [class.usa-current]="workspaceModel.page == 'biopreferred'"
  //           [routerLink]="['/workspace/biopreferred']" [queryParams]="{}">Bio-Preferred Reports</a></li>
  //       <li class="usa-sidenav-item"><a [class.usa-current]="workspaceModel.page == 'src'"
  //           [routerLink]="['/workspace/scr']" [queryParams]="{}">Service Contract Reports</a></li>
  //     </ul>
  //   </li>
  //   <li class="usa-sidenav-item">
  //     <a [class.usa-current]="domain == 'hierarchy'" [routerLink]="['/workspace']"
  //       [queryParams]="{domain:'hierarchy'}">Federal Hierarchy</a>
  //   </li>
  //   <li class="usa-sidenav-item">
  //     <a [class.usa-current]="workspaceModel.isPageInDomain('admin')" [routerLink]="['/workspace/admin']"
  //       [queryParams]="{}">Administration</a>
  //     <ul class="usa-sidenav-sublist">
  //       <li class="usa-sidenav-item"><a [class.usa-current]="workspaceModel.page == 'users'"
  //           [routerLink]="['/workspace/admin/users']" [queryParams]="{}">User Directory</a>
  //       </li>
  //       <li class="usa-sidenav-item"><a [class.usa-current]="workspaceModel.page == 'systemusers'"
  //           [routerLink]="['/workspace/admin/systemusers']" [queryParams]="{}">System Accounts</a></li>
  //     </ul>
  //   </li>
  //   <li class="usa-sidenav-item">
  //     <a [class.usa-current]="workspaceModel.isPageInDomain('profile')" [routerLink]="['/workspace/profile']"
  //       [queryParams]="{}">User Profile</a>
  //     <ul class="usa-sidenav-sublist">
  //       <li class="usa-sidenav-item"><a [class.usa-current]="workspaceModel.page == 'reset'"
  //           [routerLink]="['/workspace/reset']" [queryParams]="{}">Reset Password</a></li>
  //       <li class="usa-sidenav-item"><a [class.usa-current]="workspaceModel.page == 'roles'"
  //           [routerLink]="['/workspace/roles']" [queryParams]="{}">Roles</a></li>
  //     </ul>
  //   </li>
  // </ul>
}



