import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RequestItemComponent } from './request-item.component';

@NgModule({
  declarations: [RequestItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [RequestItemComponent]
})
export class RequestItemModule { }
