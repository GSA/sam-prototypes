import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UeiDunsServiceModule } from '../../../../common/uei-duns-service/uei-duns-service.module';
import { EntityNameServiceModule } from '../../../../common/entity-name-service/entity-name-service.module';
import { UeiDunsService, EntityNameService } from '../../../../common/public-apis';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UeiDunsServiceModule,
    EntityNameServiceModule
  ],
  exports: [
    UeiDunsServiceModule,
    EntityNameServiceModule
  ]
})
export class EntityFilterServiceModule { }
