import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HelpItemComponent } from './help-item.component';

@NgModule({
  declarations: [HelpItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HelpItemComponent]
})
export class HelpItemModule { }
