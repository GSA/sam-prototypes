import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwardIdvTypeService, NaicsService, PscService, HierarchyService, DateRangeService } from '../../../../common/public-apis';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
  	AwardIdvTypeService,
  	NaicsService,
  	PscService,
  	HierarchyService,
  	DateRangeService
  ]
})
export class OpportunityFilterServiceModule { }
