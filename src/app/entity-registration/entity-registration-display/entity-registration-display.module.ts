import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  SdsSideNavigationModule,
  SdsToolbarModule
} from '@gsa-sam/components';
import { SdsSubheaderModule } from '@gsa-sam/layouts';

import { AppLayoutModule } from '../../app-layout/app-layout.module';
import { ComponentsModule } from '../../components/components.module';

import { EntityRegistrationServiceModule } from '../../services/entity-registration-service/entity-registration-service.module';

import { EntityRegistrationDisplayRoutingModule } from './entity-registration-display-routing.module';
import { EntityRegistrationDisplayComponent } from './entity-registration-display.component';

@NgModule({
  declarations: [EntityRegistrationDisplayComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppLayoutModule,
    ComponentsModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsSubheaderModule,
    EntityRegistrationServiceModule,
    EntityRegistrationDisplayRoutingModule
  ],
  exports: [EntityRegistrationDisplayComponent]
})
export class EntityRegistrationDisplayModule { }
