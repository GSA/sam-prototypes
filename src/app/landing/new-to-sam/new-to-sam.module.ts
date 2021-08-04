import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewToSamRoutingModule } from './new-to-sam-routing.module';
import { NewToSamComponent } from './new-to-sam.component';

import { IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  declarations: [NewToSamComponent],
  imports: [
    CommonModule,
    NewToSamRoutingModule,
    IconModule
  ],
  exports: [NewToSamComponent]
})
export class NewToSamModule { }
