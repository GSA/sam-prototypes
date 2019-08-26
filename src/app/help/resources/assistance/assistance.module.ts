import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistanceResourcesRoutingModule } from './assistance-routing.module';
import { AssistanceResourcesComponent } from './assistance.component';

@NgModule({
  declarations: [AssistanceResourcesComponent],
  imports: [
    CommonModule,
    AssistanceResourcesRoutingModule
  ],
  exports: [AssistanceResourcesComponent]
})
export class AssistanceResourcesModule { }
