import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SdsSideNavigationModule } from '@gsa-sam/components';

import { SdsSubheaderModule } from '@gsa-sam/layouts';

import { AppLayoutModule } from '../app-layout/app-layout.module';

import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileComponent } from "./profile.component";

import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import { allIcons as sdsAllIcons } from "@gsa-sam/components";
import _ from "lodash-es";
import { IconModule } from "@gsa-sam/ngx-uswds-icons";

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    SdsSideNavigationModule,
    SdsSubheaderModule,
    AppLayoutModule,
    ProfileRoutingModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), _.cloneDeep(sdsAllIcons))
    )
  ],
  exports: [ProfileComponent],
})
export class ProfileModule { }
