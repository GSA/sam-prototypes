import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EntityResultComponent } from './entity-result.component';
import { ExclusionResultComponent } from './exclusion-result.component';

@NgModule({
  declarations: [EntityResultComponent, ExclusionResultComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [EntityResultComponent, ExclusionResultComponent]
})
export class EntityResultModule { }
