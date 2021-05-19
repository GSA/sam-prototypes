import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityRegistrationPreviewRoutingModule } from './entity-registration-preview-routing.module';
import { EntityRegistrationPreviewComponent } from './entity-registration-preview.component';


@NgModule({
  declarations: [EntityRegistrationPreviewComponent],
  imports: [
    CommonModule,
    EntityRegistrationPreviewRoutingModule
  ],
  exports: [EntityRegistrationPreviewComponent]
})
export class EntityRegistrationPreviewModule { }
