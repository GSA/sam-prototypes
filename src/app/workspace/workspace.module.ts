import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { WorkspaceComponentsModule } from './workspace-components/workspace-components.module';
import { WorkspaceServiceModule } from '../services/workspace-service/workspace-service.module';

import { WorkspaceRoutingModule } from "./workspace-routing.module";
import { WorkspaceComponent } from "./workspace.component";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import { allIcons as sdsAllIcons } from "@gsa-sam/components";
import _ from "lodash-es";
import { AutocompleteSampleDataService } from "./entities/entity-service/autocomplete-sample.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    WorkspaceServiceModule,
    WorkspaceComponentsModule,
    WorkspaceRoutingModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), _.cloneDeep(sdsAllIcons))
    ),
  ],
  declarations: [WorkspaceComponent],
  providers: [],
  exports: [WorkspaceComponent],
})
export class WorkspaceModule {}
