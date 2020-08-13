import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertFiltersComponent } from './alert-filters.component';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';


@NgModule({
  declarations: [AlertFiltersComponent],
  imports: [
    CommonModule,
    SdsFiltersModule
  ],
  exports: [AlertFiltersComponent]
})
export class AlertFiltersModule { }
