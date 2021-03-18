import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EntityListComponent } from "./entity-list.component";
import { EntitiesRoutingModule } from "./entities-routing.module";
import { EntityService } from "./entity-service/entity.service";
import { SearchResultListEntityDataItemModule } from "./entity-entry/search-list-item-entity.module";

import {
  SdsSideNavigationModule,
  SdsToolbarModule,
  SdsAccordionModule,
  SdsPageModule,
  SdsSearchModule,
  SdsIconModule,
} from "@gsa-sam/components";
import {
  SdsFiltersModule,
  SDSFormlyUpdateComunicationService,
} from "@gsa-sam/sam-formly";
import { SdsSubheaderModule, SearchListServiceModule } from "@gsa-sam/layouts";
import { FormlyModule } from "@ngx-formly/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SearchResultListEntityDataItemModule,
    SdsPageModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsFiltersModule,
    SdsSideNavigationModule,
    SdsSearchModule,
    SdsSubheaderModule,
    SdsIconModule,
    FormlyModule.forRoot(),
    EntitiesRoutingModule,
    SearchListServiceModule,
  ],
  declarations: [EntityListComponent],
  exports: [EntityListComponent],
  providers: [EntityService],
})
export class EntitiesModule {}
