import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { SdsSearchModule } from "@gsa-sam/components";

import { DataServicesRoutingModule } from "./data-services-routing.module";
import { DataServicesComponent } from "./data-services.component";
import { arrowRightCircle, boxArrowUpRight, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IconModule,
    NgxBootstrapIconsModule.pick({ arrowRightCircle, boxArrowUpRight }),
    SdsSearchModule,
    DataServicesRoutingModule
  ],
  declarations: [DataServicesComponent],
  exports: [DataServicesComponent],
})
export class DataServicesModule { }
