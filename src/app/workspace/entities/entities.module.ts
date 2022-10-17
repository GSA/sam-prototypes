import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EntityListComponent } from "./entity-list.component";
import { EntitiesRoutingModule } from "./entities-routing.module";
import { EntityService } from "./entity-service/entity.service";
import { SearchResultListEntityDataItemModule } from "./entity-entry/search-list-item-entity.module";

import {
  SdsSideNavigationModule,
  SdsAccordionModule,
  SdsPageModule,
  SdsSearchModule,
  SdsSideToolbarModule,
} from "@gsa-sam/components";
import {
  SdsFiltersModule,
  SDSFormlyUpdateComunicationService,
} from "@gsa-sam/sam-formly";
import { SdsSubheaderModule, SearchListServiceModule } from "@gsa-sam/layouts";
import { IconModule } from "@gsa-sam/ngx-uswds-icons";
import { FormlyModule } from "@ngx-formly/core";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import _ from "lodash-es";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SearchResultListEntityDataItemModule,
    SdsPageModule,
    SdsSideToolbarModule,
    SdsAccordionModule,
    SdsFiltersModule,
    SdsSideNavigationModule,
    SdsSearchModule,
    SdsSubheaderModule,
    IconModule,
    FormlyModule.forRoot(),
    EntitiesRoutingModule,
    SearchListServiceModule,
    NgxBootstrapIconsModule.pick(Object.assign(_.cloneDeep(allIcons))),
  ],
  declarations: [EntityListComponent],
  exports: [EntityListComponent],
  providers: [EntityService],
})
export class EntitiesModule {}
