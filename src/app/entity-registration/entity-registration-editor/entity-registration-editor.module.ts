import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { chevronLeft, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";

import { SdsSideNavigationModule } from "@gsa-sam/components";
import { SdsButtonGroupModule } from '@gsa-sam/sam-material-extensions';
import { SdsSubheaderModule } from "@gsa-sam/layouts";

import { ComponentsModule } from '../../components/components.module';
import { AppLayoutModule } from '../../app-layout/app-layout.module';

import { EntityRegistrationEditorServiceModule } from 
  '../services/entity-registration-editor-service/entity-registration-editor-service.module';

import { EntityRegistrationEditorRoutingModule } from './entity-registration-editor-routing.module';
import { EntityRegistrationEditorComponent } from './entity-registration-editor.component';
import { EntityRegistrationEditorSubheaderComponent } from './entity-registration-editor-subheader.component';


@NgModule({
  declarations: [EntityRegistrationEditorComponent, EntityRegistrationEditorSubheaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    SdsSideNavigationModule,
    SdsSubheaderModule,
    ComponentsModule,
    SdsButtonGroupModule,
    AppLayoutModule,
    NgxBootstrapIconsModule.pick({ chevronLeft }),
    EntityRegistrationEditorServiceModule,
    EntityRegistrationEditorRoutingModule
  ],
  exports: [EntityRegistrationEditorComponent, EntityRegistrationEditorSubheaderComponent]
})
export class EntityRegistrationEditorModule { }

