import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SdsActionsMenuModule } from "@gsa-sam/layouts";

import { SystemAccountItemComponent } from "./system-account-item.component";

@NgModule({
  declarations: [SystemAccountItemComponent],
  imports: [CommonModule, RouterModule, SdsActionsMenuModule],
  exports: [SystemAccountItemComponent],
})
export class SystemAccountItemModule {}
