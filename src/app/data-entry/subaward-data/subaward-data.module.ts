import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SubawardDataComponent } from "./subaward-data.component";
import { SubawardRoutingModule } from "./subaward-routing.module";
import { CardModule } from "../card/card.module";
import { SdsActionsMenuModule } from "@gsa-sam/layouts";
import { SdsDialogModule, SdsIconModule } from "@gsa-sam/components";
import { SdsFormlyDialogModule, SdsFormlyModule } from "@gsa-sam/sam-formly";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { PrototypeFormlyModule } from "../formly/formly-module";

@NgModule({
  declarations: [SubawardDataComponent],
  imports: [
    CommonModule,
    SubawardRoutingModule,
    CardModule,
    FormsModule,
    SdsActionsMenuModule,
    SdsIconModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    SdsFormlyDialogModule,
    SdsDialogModule,
    FormlyModule.forRoot(),
    PrototypeFormlyModule,
  ],
  exports: [SubawardDataComponent],
})
export class SubawardDataModule {}
