import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamFeatureBannerComponent } from './sam-feature-banner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
  	SamFeatureBannerComponent
  ],
  declarations: [SamFeatureBannerComponent]
})
export class SamFeatureBannerModule { }
