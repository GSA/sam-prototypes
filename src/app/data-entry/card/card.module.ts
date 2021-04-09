import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Material
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { CardComponent } from "./card.component";
import { SdsIconModule } from "@gsa-sam/components";
import { NgxBootstrapIconsModule, dash, plus, x } from "ngx-bootstrap-icons";
// Component

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    SdsIconModule,
    NgxBootstrapIconsModule.pick({ dash, plus, x }),
  ],
  exports: [CardComponent],
})
export class CardModule {}
