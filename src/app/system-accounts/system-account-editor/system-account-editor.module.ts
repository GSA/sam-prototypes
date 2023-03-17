import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { chevronLeft, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";

import { SdsButtonGroupModule } from "@gsa-sam/sam-material-extensions";
import { SdsSubheaderModule } from "@gsa-sam/layouts";

import { ComponentsModule } from "../../components/components.module";
import { AppLayoutModule } from "../../app-layout/app-layout.module";
import { IconModule } from "@gsa-sam/ngx-uswds-icons";

import { SystemAccountEditorRoutingModule } from "./system-account-editor-routing.module";
import { SystemAccountEditorComponent } from "./system-account-editor.component";

@NgModule({
  declarations: [SystemAccountEditorComponent],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    AppLayoutModule,
    IconModule,
    SdsSubheaderModule,
    SdsButtonGroupModule,
    NgxBootstrapIconsModule.pick({ chevronLeft }),
    SystemAccountEditorRoutingModule,
  ],
  exports: [SystemAccountEditorComponent],
})
export class SystemAccountEditorModule {}
