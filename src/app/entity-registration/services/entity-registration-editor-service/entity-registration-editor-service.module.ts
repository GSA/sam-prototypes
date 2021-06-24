import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityRegistrationServiceModule } from '../../../services/entity-registration-service/entity-registration-service.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EntityRegistrationServiceModule
  ]
})
export class EntityRegistrationEditorServiceModule { }
