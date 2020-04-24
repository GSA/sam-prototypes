import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewToSamRoutingModule } from './new-to-sam-routing.module';
import { NewToSamComponent } from './new-to-sam.component';

@NgModule({
  declarations: [NewToSamComponent],
  imports: [
    CommonModule,
    NewToSamRoutingModule
  ],
  exports: [NewToSamComponent]
})
export class NewToSamModule { }
