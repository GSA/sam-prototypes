import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import _ from "lodash-es";

import { SdsSubheaderModule } from "@gsa-sam/layouts";
import { SdsButtonGroupModule } from '@gsa-sam/sam-material-extensions';

import {AppLayoutModule} from '../app-layout.module';

import { DataEntrySubheaderComponent } from './data-entry-subheader.component';
import { DataEntrySideNavComponent } from './data-entry-side-nav/data-entry-side-nav.component';

@NgModule({
  declarations: [DataEntrySubheaderComponent, DataEntrySideNavComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppLayoutModule,
    SdsSubheaderModule,
    SdsButtonGroupModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons))
    )
  ],
  exports: [DataEntrySubheaderComponent, DataEntrySideNavComponent]
})
export class DataEntryLayoutModule { }
