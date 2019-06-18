import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityListComponent } from './entity-list.component';
import { EntitiesRoutingModule } from './entities-routing.module';
import { EntityService } from './entity-service/entity.service';
import { SearchListServiceModule } from '@gsa-sam/layouts';
import { SearchResultListEntityDataItemComponent } from './entity-entry/search-list-item-entity.component';

@NgModule({
  imports: [
    CommonModule,
    EntitiesRoutingModule, SearchListServiceModule
  ],
  declarations: [EntityListComponent, SearchResultListEntityDataItemComponent],
  exports: [EntityListComponent],
  providers: [EntityService]
})
export class EntitiesModule { }
