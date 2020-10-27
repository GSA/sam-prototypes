import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwardIdvTypeService, NaicsService, PscService, HierarchyService, DateRangeService } from '../../../common/public-apis';
import { ContractOpportunityFiltersService } from './contract-opportunity-filters.service';

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
  	DateRangeService,
    ContractOpportunityFiltersService
  ]
})
export class ContractOpportunityFiltersModule { }
