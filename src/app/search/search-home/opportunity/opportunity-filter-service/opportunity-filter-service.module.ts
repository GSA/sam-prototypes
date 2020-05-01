import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwardIdvTypeService, NaicsService, DateRangeService } from '../../../../common/public-apis';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
  	AwardIdvTypeService,
  	NaicsService,
  	DateRangeService
  ]
})
export class OpportunityFilterServiceModule { }
