import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamBrandingComponent } from './sam-branding.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SamBrandingComponent
  ],
  declarations: [SamBrandingComponent]
})
export class SamBrandingModule { }
