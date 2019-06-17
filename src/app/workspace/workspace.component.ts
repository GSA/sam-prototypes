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
    console.log(this.sideNavModel);
    this.change.detectChanges();
  }
  public sideNavModel: SideNavigationModel = {
    navigationLinks: [
      { id: 'workspacehome', text: 'Workspace Home', mode: NavigationMode.INTERNAL, route: '/workspace' },
      {
        id: 'contracting', text: 'Contracting', mode: NavigationMode.INTERNAL, route: '/workspace', children: [
          { id: 'contractOpportunityForecasts', text: 'Contract Opportunity Forecasts', mode: NavigationMode.INTERNAL, route: '/workspace/contractopportunities' },
          { id: 'contractOpportunites', text: 'Contract Opportunities', mode: NavigationMode.INTERNAL, route: '/workspace/contractopportunities' },
          { id: 'contractData', text: 'Contract Data', mode: NavigationMode.INTERNAL, route: '/workspace/contractdata' }
        ]
      }, {
        id: 'federalAssistance', text: 'Federal Assistance', mode: NavigationMode.INTERNAL, route: '/workspace/fal/dashboard', children: [

          {
            id: 'assistancelist', mode: NavigationMode.INTERNAL,
            route: '/workspace/fal/assistancelist', text: 'Assistance Listings'
          },
          {
            id: 'cfdanumber', mode: NavigationMode.INTERNAL,
            route: '/workspace/fal/cfdanumber', text: 'CFDA Numbers'
          },
          {
            id: 'regionallocation', mode: NavigationMode.INTERNAL,
            route: '/workspace/fal/regionallocation', text: 'Regional Locations'
          }
        ]
      },
      {
        id: 'entityInformation', text: 'Entity Information', route: '/workspace/entities/dashboard', mode: NavigationMode.INTERNAL, children: [
          {
            id: 'registrations', mode: NavigationMode.INTERNAL,
            route: '/workspace/registrations', text: 'Entity Registrations'
          },
          {
            id: 'exclusions', mode: NavigationMode.INTERNAL,
            route: '/workspace/exclusions', text: 'Exclusions'
          },
          {
            id: 'integrityinfo', mode: NavigationMode.INTERNAL,
            route: '/workspace/integrity', text: 'Integrity Information'
          }]
      },
      {
        id: 'compliance', mode: NavigationMode.INTERNAL,
        route: '/workspace/compliance/dashboard', text: 'Compliance'
        , children: [
          {
            id: 'pastperformance', mode: NavigationMode.INTERNAL,
            route: '/workspace/compliance/pastperformance', text: 'Past Performance'
          },
          {
            id: 'ffatasubaward', mode: NavigationMode.INTERNAL,
            route: '/workspace/ffatasubaward', text: 'FFATA Sub-Awards'
          },
          {
            id: 'far19subaward', mode: NavigationMode.INTERNAL,
            route: '/workspace/far19subaward', text: 'FAR 19 Sub-Awards'
          },
          {
            id: 'biopreferred', mode: NavigationMode.INTERNAL,
            route: '/workspace/biopreferred', text: 'Bio-Preferred Reports'
          },
          {
            id: 'src', mode: NavigationMode.INTERNAL,
            route: '/workspace/scr', text: 'Service Contract Reports'
          }
        ]
      },
      {
        id: 'federalHierarchy', route: '/workspace', mode: NavigationMode.INTERNAL,
        text: 'Federal Hierarchy'
      },
      {
        id: 'admin', route: '/workspace/admin', mode: NavigationMode.INTERNAL,
        text: 'Administration',
        children: [
          {
            id: 'users', mode: NavigationMode.INTERNAL,
            route: '/workspace/admin/users', text: 'User Directory'
          }
          ,
          {
            id: 'systemusers', mode: NavigationMode.INTERNAL,
            route: '/workspace/admin/systemusers', text: 'System Accounts'
          }
        ]
      },

      {
        id: 'profile', route: '/workspace/profile', mode: NavigationMode.INTERNAL,
        text: 'User Profile',
        children: [
          {
            id: 'reset', mode: NavigationMode.INTERNAL,
            route: '/workspace/reset', text: 'Reset Password'
          },
          {
            id: 'roles', mode: NavigationMode.INTERNAL,
            route: '/workspace/roles', text: 'Roles'
          }
        ]
      }
    ]
  };





  //   <ul class="usa-sidenav">

  //   <li >
  //     { id: 'profile', route:'/workspace/profile']"
  //       >User Profile</a>
  //     <ul children: [
  //       { id: 'reset',
  //           route:'/workspace/reset', text: 'Reset Password'}
  //       { id: 'roles',
  //           route:'/workspace/roles', text: 'Roles'}
  //     </ul>
  //   </li>
  // </ul>
}



