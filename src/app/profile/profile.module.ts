import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SdsSideNavigationModule } from '@gsa-sam/components';

import { SdsSubheaderModule } from '@gsa-sam/layouts';

import { AppLayoutModule } from '../app-layout/app-layout.module';

import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileComponent } from "./profile.component";

import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
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
      Object.assign(_.cloneDeep(allIcons))
    )
  ],
  exports: [ProfileComponent],
})
export class ProfileModule { }
