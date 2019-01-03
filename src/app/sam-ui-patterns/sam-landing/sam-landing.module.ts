import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamLandingRoutingModule } from './sam-landing-routing.module';
import { SamHeaderModule } from '../../sam-components/sam-header/sam-header.module';
import { SamSubheaderModule } from '../../sam-components/sam-subheader/sam-subheader.module';
import { SamFooterModule } from '../../sam-components/sam-footer/sam-footer.module';
import { SamLandingComponent } from './sam-landing.component';

@NgModule({
  imports: [
    CommonModule,
    SamLandingRoutingModule,
    SamHeaderModule,
    SamSubheaderModule,
    SamFooterModule,
  ],
  exports: [
  	SamLandingComponent
  ],
  declarations: [SamLandingComponent]
})
export class SamLandingModule { }
