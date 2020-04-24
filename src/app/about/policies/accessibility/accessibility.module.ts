import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessibilityRoutingModule } from './accessibility-routing.module';
import { AccessibilityComponent } from './accessibility.component';

@NgModule({
  declarations: [AccessibilityComponent],
  imports: [
    CommonModule,
    AccessibilityRoutingModule
  ],
  exports: [AccessibilityComponent]
})
export class AccessibilityModule { }
