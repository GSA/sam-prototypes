import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IconModule } from "@gsa-sam/ngx-uswds-icons";
import { LinkListComponent } from "./list/link-list.component";
import { AddressComponent } from "./location/address.component";
import { DisplayFieldComponent } from "./display/display-field.component";
import { PocCardComponent } from "./display/poc-card.component";

@NgModule({
  declarations: [
    LinkListComponent,
    AddressComponent,
    DisplayFieldComponent,
    PocCardComponent,
  ],
  imports: [CommonModule, IconModule],
  exports: [
    LinkListComponent,
    AddressComponent,
    DisplayFieldComponent,
    PocCardComponent,
  ],
})
export class ComponentsModule { }
