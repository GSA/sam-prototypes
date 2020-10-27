import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IntegrityResultComponent } from './integrity-result.component';

@NgModule({
  declarations: [IntegrityResultComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [IntegrityResultComponent]
})
export class IntegrityResultModule { }
