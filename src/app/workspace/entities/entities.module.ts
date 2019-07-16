import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntityListComponent } from './entity-list.component';
import { EntitiesRoutingModule } from './entities-routing.module';
import { EntityService } from './entity-service/entity.service';
import { SearchResultListEntityDataItemModule } from './entity-entry/search-list-item-entity.module';
import { SearchListServiceModule } from '@gsa-sam/layouts';
import {
  SdsPageModule,
  SdsToolbarModule,
  SdsAccordionModule
} from '@gsa-sam/components';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SearchResultListEntityDataItemModule,
    SdsPageModule,
    SdsToolbarModule, SdsAccordionModule, SdsFiltersModule,
    FormlyModule.forRoot(),
    EntitiesRoutingModule, SearchListServiceModule
  ],
  declarations: [EntityListComponent],
  exports: [EntityListComponent],
  providers: [EntityService]
})
export class EntitiesModule { }
