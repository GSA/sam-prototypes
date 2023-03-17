import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidateEntityRelationshipsRoutingModule } from './validate-entity-relationships-routing.module';
import { ValidateEntityRelationshipsComponent } from './validate-entity-relationships.component';


@NgModule({
  declarations: [
    ValidateEntityRelationshipsComponent
  ],
  imports: [
    CommonModule,
    ValidateEntityRelationshipsRoutingModule
  ]
})
export class ValidateEntityRelationshipsModule { }
