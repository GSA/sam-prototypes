import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OpportunityResultComponent } from './opportunity-result.component';

@NgModule({
  declarations: [OpportunityResultComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [OpportunityResultComponent]
})
export class OpportunityResultModule { }
