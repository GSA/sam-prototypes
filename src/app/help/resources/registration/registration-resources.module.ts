import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationResourcesRoutingModule } from './registration-resources-routing.module';
import { RegistrationResourcesComponent } from './registration-resources.component';

@NgModule({
  declarations: [RegistrationResourcesComponent],
  imports: [
    CommonModule,
    RegistrationResourcesRoutingModule
  ],
  exports: [RegistrationResourcesComponent]
})
export class RegistrationResourcesModule { }
