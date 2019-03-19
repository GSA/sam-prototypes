import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabankSearchRoutingModule } from './databank-search-routing.module';
import { DatabankSearchComponent } from './databank-search.component';

@NgModule({
  imports: [
    CommonModule,
    DatabankSearchRoutingModule
  ],
  declarations: [DatabankSearchComponent]
})
export class DatabankSearchModule { }
