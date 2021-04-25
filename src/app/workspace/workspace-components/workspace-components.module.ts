import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WorkspaceCardComponent } from './workspace-card.component';
import { WorkspaceStatisticComponent, WorkspaceStatisticsComponent } from './workspace-statistic.component';
import { WorkspaceDashboardComponent } from './workspace-dashboard.component';
import { ContractOpportunitiesDashboardComponent } from './contract-opportunities-dashboard.component';
import { AssistanceListingsDashboardComponent } from './assistance-listings-dashboard.component';
import { CbaDashboardComponent } from './cba-dashboard.component';
import { EntityRegistrationDashboardComponent } from './entity-registration-dashboard.component';
import { UserDirectoryDashboardComponent } from './user-directory-dashboard.component';
import { FederalHierarchyDashboardComponent } from './federal-hierarchy-dashboard.component';
import { SystemAccountsDashboardComponent } from './system-accounts-dashboard.component';
import { EntityReportingDashboardComponent } from './entity-reporting-dashboard.component';

import { EntityRegistrationServiceModule } from '../../services/entity-registration-service/entity-registration-service.module';
import { ContractOpportunitiesServiceModule } from '../../services/contract-opportunities-service/contract-opportunities-service.module';
import { AssistanceServiceModule } from '../../services/assistance-service/assistance-service.module';
import { SystemAccountsServiceModule } from '../../services/system-accounts-service/system-accounts-service.module';
import { HierarchyServiceModule } from '../../services/hierarchy-service/hierarchy-service.module';
import { WorkspaceStatisticSquareComponent, WorkspaceStatisticsSquareComponent } from './workspace-statistic-square.component';


@NgModule({
  declarations: [WorkspaceCardComponent, WorkspaceStatisticComponent, WorkspaceStatisticsComponent, WorkspaceDashboardComponent, ContractOpportunitiesDashboardComponent, AssistanceListingsDashboardComponent, CbaDashboardComponent, EntityRegistrationDashboardComponent, UserDirectoryDashboardComponent, FederalHierarchyDashboardComponent, SystemAccountsDashboardComponent, EntityReportingDashboardComponent, WorkspaceStatisticSquareComponent, WorkspaceStatisticsSquareComponent],
  imports: [
    CommonModule,
    RouterModule,
    AssistanceServiceModule,
    ContractOpportunitiesServiceModule,
    EntityRegistrationServiceModule,
    SystemAccountsServiceModule,
    HierarchyServiceModule
  ],
  exports: [WorkspaceCardComponent, WorkspaceStatisticComponent, WorkspaceStatisticsComponent, WorkspaceDashboardComponent, ContractOpportunitiesDashboardComponent, AssistanceListingsDashboardComponent, CbaDashboardComponent, EntityRegistrationDashboardComponent, UserDirectoryDashboardComponent, FederalHierarchyDashboardComponent, SystemAccountsDashboardComponent, EntityReportingDashboardComponent, WorkspaceStatisticSquareComponent, WorkspaceStatisticsSquareComponent]
})
export class WorkspaceComponentsModule { }
