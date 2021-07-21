import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationLinkComponent } from './navigation-link.component';

@NgModule({
  declarations: [NavigationLinkComponent],
  imports: [
    CommonModule
  ],
  exports: [NavigationLinkComponent]
})
export class LayoutComponentsModule { }
