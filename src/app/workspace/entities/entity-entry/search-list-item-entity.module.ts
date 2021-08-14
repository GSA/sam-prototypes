import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SearchResultListEntityDataItemComponent } from "./search-list-item-entity.component";

import { SdsActionsMenuModule } from "@gsa-sam/layouts";
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import _ from "lodash-es";

@NgModule({
  declarations: [SearchResultListEntityDataItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SdsActionsMenuModule,
    IconModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons))
    ),
  ],
  exports: [SearchResultListEntityDataItemComponent],
})
export class SearchResultListEntityDataItemModule {
  constructor() {}
}
