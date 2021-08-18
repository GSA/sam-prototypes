import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { chevronLeft, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";

import { SdsSideNavigationModule } from "@gsa-sam/components";
import { SdsButtonGroupModule } from '@gsa-sam/sam-material-extensions';
import { SdsSubheaderModule, SideToolbarModule } from "@gsa-sam/layouts";

import { ComponentsModule } from '../components/components.module';
import { AppLayoutModule } from '../app-layout/app-layout.module';

import { EntityThreeSixtyServiceModule } from
  './services/entity-three-sixty-service/entity-three-sixty-service.module';

import { EntityThreeSixtyRoutingModule } from './entity-three-sixty-routing.module';
import { EntityThreeSixtyComponent } from './entity-three-sixty.component';
import { EntityThreeSixtySubheaderComponent } from './entity-three-sixty-subheader.component';

import { EntityRegistrationSummaryComponent } from "./entity-registration-summary.component";
import { SummaryReviewListComponent } from "./summary-review-list.component";
import { SummaryAddressesComponent } from "./summary-addresses.component";
import { EntityThreeSixtyNavigationComponent } from './entity-three-sixty-navigation.component';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';


@NgModule({
  declarations: [EntityThreeSixtyComponent, EntityThreeSixtySubheaderComponent, EntityRegistrationSummaryComponent, SummaryReviewListComponent, SummaryAddressesComponent, EntityThreeSixtyNavigationComponent],
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    SdsSideNavigationModule,
    SdsSubheaderModule,
    ComponentsModule,
    SdsButtonGroupModule,
    SideToolbarModule,
    AppLayoutModule,
    NgxBootstrapIconsModule.pick({ chevronLeft }),
    EntityThreeSixtyServiceModule,
    EntityThreeSixtyRoutingModule
  ],
  exports: [EntityThreeSixtyComponent, EntityThreeSixtySubheaderComponent, EntityThreeSixtyNavigationComponent]
})
export class EntityThreeSixtyModule { }
