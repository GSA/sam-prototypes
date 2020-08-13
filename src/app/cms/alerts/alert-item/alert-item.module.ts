import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlertItemComponent } from './alert-item.component';

@NgModule({
  declarations: [AlertItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [AlertItemComponent]
})
export class AlertItemModule { }
