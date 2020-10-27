import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExclusionFiltersService } from './exclusion-filters.service';
import { UeiDunsServiceModule } from '../../../common/uei-duns-service/uei-duns-service.module';
import { EntityNameServiceModule } from '../../../common/entity-name-service/entity-name-service.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UeiDunsServiceModule,
    EntityNameServiceModule
  ],
  providers: [ExclusionFiltersService]
})
export class ExclusionFiltersModule { }
