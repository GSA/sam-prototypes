import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { SdsSearchModule } from "@gsa-sam/components";

import { DataServicesRoutingModule } from "./data-services-routing.module";
import { DataServicesComponent } from "./data-services.component";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import { allIcons as sdsAllIcons } from "@gsa-sam/components";
import _ from "lodash-es";
import { IconModule } from "@gsa-sam/ngx-uswds-icons";
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), _.cloneDeep(sdsAllIcons))
    ),
    SdsSearchModule,
    DataServicesRoutingModule,
    IconModule,
  ],
  declarations: [DataServicesComponent],
  exports: [DataServicesComponent],
})
export class DataServicesModule { }
