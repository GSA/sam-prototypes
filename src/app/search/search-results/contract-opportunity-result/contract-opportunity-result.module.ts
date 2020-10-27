import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContractOpportunityResultComponent } from './contract-opportunity-result.component';

@NgModule({
  declarations: [ContractOpportunityResultComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ContractOpportunityResultComponent]
})
export class ContractOpportunityResultModule { }
