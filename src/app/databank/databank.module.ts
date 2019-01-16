import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabankRoutingModule } from './databank-routing.module';
import { DatabankComponent } from './databank.component';

@NgModule({
  imports: [
    CommonModule,
    DatabankRoutingModule
  ],
  declarations: [DatabankComponent]
})
export class DatabankModule { }
