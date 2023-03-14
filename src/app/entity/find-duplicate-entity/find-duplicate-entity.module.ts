import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from "@ngx-formly/core";
import { SdsFormlyModule } from "@gsa-sam/sam-formly";

import { SdsTabsModule } from '@gsa-sam/components';

import { AppLayoutModule } from "../../app-layout/app-layout.module";
import { WorkspaceLayoutModule } from "../../app-layout/workspace-layout/workspace-layout.module";

import { FindDuplicateEntityRoutingModule } from './find-duplicate-entity-routing.module';
import { FindDuplicateEntityComponent } from './find-duplicate-entity.component';


@NgModule({
  declarations: [
    FindDuplicateEntityComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    SdsFormlyModule,
    SdsTabsModule,
    AppLayoutModule,
    WorkspaceLayoutModule,
    FindDuplicateEntityRoutingModule
  ]
})
export class FindDuplicateEntityModule { }
