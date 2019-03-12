import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractdataComponent } from './contractdata.component';
import { ContractdataRoutingModule } from './contractdata-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ContractdataRoutingModule
  ],
  declarations: [ContractdataComponent],
  exports: [ContractdataComponent]
})
export class ContractdataModule { }
