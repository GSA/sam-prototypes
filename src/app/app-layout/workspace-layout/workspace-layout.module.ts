import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormlyModule } from "@ngx-formly/core";
import { FormsModule } from "@angular/forms";

import { SdsSearchModule } from '@gsa-sam/components';
import { SdsSubheaderModule } from "@gsa-sam/layouts";

import { WorkspaceSubheaderComponent } from './workspace-subheader.component';

@NgModule({
  declarations: [WorkspaceSubheaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormlyModule,
    FormsModule,
    SdsSearchModule,
    SdsSubheaderModule
  ],
  exports: [WorkspaceSubheaderComponent]
})
export class WorkspaceLayoutModule { }
