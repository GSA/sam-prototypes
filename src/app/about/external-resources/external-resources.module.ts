import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExternalResourcesRoutingModule } from './external-resources-routing.module';
import { ExternalResourcesComponent } from './external-resources.component';

@NgModule({
  declarations: [ExternalResourcesComponent],
  imports: [
    CommonModule,
    ExternalResourcesRoutingModule
  ],
  exports: [ExternalResourcesComponent]
})
export class ExternalResourcesModule { }
