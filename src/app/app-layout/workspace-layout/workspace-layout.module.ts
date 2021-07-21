import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormlyModule } from "@ngx-formly/core";
import { FormsModule } from "@angular/forms";
import { chevronLeft, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";

import { SdsIconModule } from "@gsa-sam/components";

import { SdsSearchModule } from '@gsa-sam/components';
import { SdsSubheaderModule } from "@gsa-sam/layouts";

import { WorkspaceSubheaderComponent } from './workspace-subheader.component';
import { WorkspaceFieldComponent } from './workspace-field.component';

@NgModule({
  declarations: [WorkspaceSubheaderComponent, WorkspaceFieldComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormlyModule,
    FormsModule,
    SdsIconModule,
    SdsSearchModule,
    SdsSubheaderModule,
    NgxBootstrapIconsModule.pick({ chevronLeft }),
  ],
  exports: [WorkspaceSubheaderComponent, WorkspaceFieldComponent]
})
export class WorkspaceLayoutModule { }