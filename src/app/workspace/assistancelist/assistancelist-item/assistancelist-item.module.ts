import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AssistancelistItemComponent } from "./assistancelist-item.component";

import { SdsActionsMenuModule } from "@gsa-sam/layouts";

@NgModule({
  declarations: [AssistancelistItemComponent],
  imports: [CommonModule, RouterModule, FormsModule, SdsActionsMenuModule],
  exports: [AssistancelistItemComponent],
})
export class AssistancelistItemModule {
  constructor() {}
}
