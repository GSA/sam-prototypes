import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistanceHomeRoutingModule } from './assistance-home-routing.module';
import { AssistanceHomeComponent } from './assistance-home.component';

@NgModule({
  imports: [
    CommonModule,
    AssistanceHomeRoutingModule
  ],
  declarations: [AssistanceHomeComponent]
})
export class AssistanceHomeModule { }
