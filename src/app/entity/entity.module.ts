import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SdsSubheaderModule } from "@gsa-sam/layouts";

import { ComponentsModule } from '../components/components.module';
import { AppLayoutModule } from '../app-layout/app-layout.module';

import { EntityRoutingModule } from './entity-routing.module';
import { EntityComponent } from './entity.component';
import { EntitySubheaderComponent } from './entity-subheader.component';


@NgModule({
  declarations: [
    EntityComponent,
    EntitySubheaderComponent
  ],
  imports: [
    CommonModule,
    SdsSubheaderModule,
    ComponentsModule,
    AppLayoutModule,
    EntityRoutingModule
  ]
})
export class EntityModule { }
