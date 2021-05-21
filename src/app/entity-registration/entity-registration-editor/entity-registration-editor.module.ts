import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SdsSideNavigationModule } from "@gsa-sam/components";
import { SdsButtonGroupModule } from '@gsa-sam/sam-material-extensions';

import { ComponentsModule } from '../../components/components.module';
import { AppLayoutModule } from '../../app-layout/app-layout.module';
import { DataEntryLayoutModule } from '../../app-layout/data-entry-layout/data-entry-layout.module';

import { EntityRegistrationEditorServiceModule } from '../services/entity-registration-editor-service/entity-registration-editor-service.module';

import { EntityRegistrationEditorRoutingModule } from './entity-registration-editor-routing.module';
import { EntityRegistrationEditorComponent } from './entity-registration-editor.component';


@NgModule({
  declarations: [EntityRegistrationEditorComponent],
  imports: [
    CommonModule,
    RouterModule,
    SdsSideNavigationModule,
    AppLayoutModule,
    DataEntryLayoutModule,
    ComponentsModule,
    SdsButtonGroupModule,
    EntityRegistrationEditorServiceModule,
    EntityRegistrationEditorRoutingModule
  ],
  exports: [EntityRegistrationEditorComponent]
})
export class EntityRegistrationEditorModule { }

