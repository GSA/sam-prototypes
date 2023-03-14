import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntityModelModule } from '../entity-model/entity-model.module';

import { EntityDashboardRoutingModule } from './entity-dashboard-routing.module';
import { EntityDashboardComponent } from './entity-dashboard.component';
import { VerticalTabComponent, VerticalTabsComponent } from './vertical-tabs.component';
import { BusinessInformationDashboardComponent } from './business-information-dashboard.component';
import { CageInformationDashboardComponent } from './cage-information-dashboard.component';
import { TaxInformationDashboardComponent } from './tax-information-dashboard.component';
import { EntityRelationshipsDashboardComponent } from './entity-relationships-dashboard.component';
import { FinancialInformationDashboardComponent } from './financial-information-dashboard.component';
import { LegalInformationDashboardComponent } from './legal-information-dashboard.component';
import { EmployeeInformationDashboardComponent } from './employee-information-dashboard.component';
import { SocioEconomicDashboardComponent } from './socio-economic-dashboard.component';
import { ValidationsOverviewDashboardComponent } from './validations-overview-dashboard.component';
import { SectionsOverviewDashboardComponent } from './sections-overview-dashboard.component';

import {
  NgxBootstrapIconsModule,
  chevronLeft,
  chevronRight,
  slashCircleFill,
  checkCircleFill,
  circle,
  clockFill,
  fileWordFill,
  question,
  save,
  dash,
  check,
  questionCircle,
  exclamationTriangle,
  x,
} from 'ngx-bootstrap-icons';

import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { OverviewDashboardComponent } from './overview-dashboard.component';
import { IndustryInformationDashboardComponent } from './industry-information-dashboard.component';
import { OverviewCardComponent } from './overview-card.component';

@NgModule({
  declarations: [
    EntityDashboardComponent,
    VerticalTabComponent,
    VerticalTabsComponent,
    BusinessInformationDashboardComponent,
    CageInformationDashboardComponent,
    TaxInformationDashboardComponent,
    EntityRelationshipsDashboardComponent,
    FinancialInformationDashboardComponent,
    LegalInformationDashboardComponent,
    EmployeeInformationDashboardComponent,
    SocioEconomicDashboardComponent,
    ValidationsOverviewDashboardComponent,
    SectionsOverviewDashboardComponent,
    OverviewDashboardComponent,
    IndustryInformationDashboardComponent,
    OverviewCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    EntityModelModule,   
    NgxBootstrapIconsModule.pick({
      chevronLeft,
      chevronRight,
      circle,
      clockFill,
      slashCircleFill,
      checkCircleFill,
      fileWordFill,
      questionCircle,
      question,
      save,
      dash,
      check,
      exclamationTriangle,
      x,
    }),
    IconModule,
    EntityDashboardRoutingModule
  ]
})
export class EntityDashboardModule { }
