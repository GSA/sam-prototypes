import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaEditAuthRoutingModule } from './sa-edit-auth-routing.module';
import { SaEditAuthComponent } from './sa-edit-auth.component';

@NgModule({
  declarations: [SaEditAuthComponent],
  imports: [
    CommonModule,
    SaEditAuthRoutingModule
  ],
  exports: [SaEditAuthComponent]
})
export class SaEditAuthModule { }
