import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EntityRegistrationResultComponent } from './entity-registration-result.component';

@NgModule({
  declarations: [EntityRegistrationResultComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [EntityRegistrationResultComponent]
})
export class EntityRegistrationResultModule { }
