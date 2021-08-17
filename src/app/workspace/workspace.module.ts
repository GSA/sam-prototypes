import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FeedServicesModule } from '../services/feed-services/feed-services.module';
import { LandingLayoutModule } from '../app-layout/landing-layout/landing-layout.module';

import { WorkspaceComponentsModule } from './workspace-components/workspace-components.module';
import { WorkspaceServiceModule } from '../services/workspace-service/workspace-service.module';

import { WorkspaceRoutingModule } from "./workspace-routing.module";
import { WorkspaceComponent } from "./workspace.component";
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import _ from "lodash-es";
import { AutocompleteSampleDataService } from "./entities/entity-service/autocomplete-sample.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LandingLayoutModule,
    WorkspaceServiceModule,
    WorkspaceComponentsModule,
    WorkspaceRoutingModule,
    FeedServicesModule,
    IconModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons))
    ),
  ],
  declarations: [WorkspaceComponent],
  providers: [],
  exports: [WorkspaceComponent],
})
export class WorkspaceModule {}
