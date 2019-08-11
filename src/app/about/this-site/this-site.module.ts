import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThisSiteRoutingModule } from './this-site-routing.module';
import { ThisSiteComponent } from './this-site.component';

@NgModule({
  declarations: [ThisSiteComponent],
  imports: [
    CommonModule,
    ThisSiteRoutingModule
  ],
  exports: [ThisSiteComponent]
})
export class ThisSiteModule { }
