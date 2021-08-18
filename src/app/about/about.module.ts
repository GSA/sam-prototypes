import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SdsSelectionPanelModule } from "@gsa-sam/components";
import { AppLayoutModule } from '../app-layout/app-layout.module';

import { AboutRoutingModule } from "./about-routing.module";
import { AboutComponent } from "./about.component";

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AppLayoutModule,
    SdsSelectionPanelModule,
    AboutRoutingModule
  ],
  exports: [AboutComponent],
})
export class AboutModule { }
