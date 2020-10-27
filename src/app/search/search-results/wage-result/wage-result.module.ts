import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DbaResultComponent } from './dba-result.component';
import { ScaResultComponent } from './sca-result.component';

@NgModule({
  declarations: [DbaResultComponent, ScaResultComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
  	DbaResultComponent, ScaResultComponent
  ]
})
export class WageResultModule { }
