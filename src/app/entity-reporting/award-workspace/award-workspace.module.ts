import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Subject } from 'rxjs';


import {
  SdsCollapseModule,
  SdsSearchModule,
  SdsIconModule
} from '@gsa-sam/components';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { SdsSubheaderModule, SearchListServiceModule, SideToolbarModule } from '@gsa-sam/layouts';
import { SdsButtonGroupModule} from '@gsa-sam/sam-material-extensions';

import { FormlyModule } from '@ngx-formly/core';
import { FormsModule } from '@angular/forms';

import { AppLayoutModule } from '../../app-layout/app-layout.module';
import {ComponentsModule} from '../../components/components.module';

import { EntityReportingServiceModule } from '../../services/entity-reporting-service/entity-reporting-service.module';

import { AwardWorkspaceRoutingModule } from './award-workspace-routing.module';
import { AwardWorkspaceComponent } from './award-workspace.component';
import { AwardItemComponent } from './award-item.component';

@NgModule({
  declarations: [AwardWorkspaceComponent, AwardItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FormlyModule,
    FormsModule,
    AppLayoutModule,
    ComponentsModule,
    SdsSearchModule,
    SdsIconModule,
    SdsButtonGroupModule,
    SdsFiltersModule,
    SdsSubheaderModule,
    SearchListServiceModule,
    SideToolbarModule,
    EntityReportingServiceModule,
    AwardWorkspaceRoutingModule
  ],
  exports: [AwardWorkspaceComponent, AwardItemComponent]
})
export class AwardWorkspaceModule { }

