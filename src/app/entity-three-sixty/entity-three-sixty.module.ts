import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { chevronLeft, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";

import { SdsSideNavigationModule } from "@gsa-sam/components";
import { SdsButtonGroupModule } from '@gsa-sam/sam-material-extensions';
import { SdsSubheaderModule } from "@gsa-sam/layouts";

import { ComponentsModule } from '../components/components.module';
import { AppLayoutModule } from '../app-layout/app-layout.module';

import { EntityThreeSixtyServiceModule } from 
  './services/entity-three-sixty-service/entity-three-sixty-service.module';

import { EntityThreeSixtyRoutingModule } from './entity-three-sixty-routing.module';
import { EntityThreeSixtyComponent } from './entity-three-sixty.component';
import { EntityThreeSixtySubheaderComponent } from './entity-three-sixty-subheader.component';


@NgModule({
  declarations: [EntityThreeSixtyComponent, EntityThreeSixtySubheaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    SdsSideNavigationModule,
    SdsSubheaderModule,
    ComponentsModule,
    SdsButtonGroupModule,
    AppLayoutModule,
    NgxBootstrapIconsModule.pick({ chevronLeft }),
    EntityThreeSixtyServiceModule,
    EntityThreeSixtyRoutingModule
  ],
  exports: [EntityThreeSixtyComponent, EntityThreeSixtySubheaderComponent]
})
export class EntityThreeSixtyModule { }
