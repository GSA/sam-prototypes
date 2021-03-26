import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SearchResultListEntityDataItemComponent } from "./search-list-item-entity.component";

import { SdsActionsMenuModule } from "@gsa-sam/layouts";
import { SdsIconModule } from "@gsa-sam/components";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";

@NgModule({
  declarations: [SearchResultListEntityDataItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SdsActionsMenuModule,
    SdsIconModule,
    NgxBootstrapIconsModule.pick(Object.assign(allIcons)),
  ],
  exports: [SearchResultListEntityDataItemComponent],
})
export class SearchResultListEntityDataItemModule {
  constructor() {}
}
