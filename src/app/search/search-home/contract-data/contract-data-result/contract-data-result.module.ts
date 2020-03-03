import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContractDataResultComponent } from './contract-data-result.component';

@NgModule({
  declarations: [ContractDataResultComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
  	ContractDataResultComponent
  ]
})
export class ContractDataResultModule { }
