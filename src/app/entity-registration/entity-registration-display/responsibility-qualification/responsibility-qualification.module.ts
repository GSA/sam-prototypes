import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppLayoutModule } from '../../../app-layout/app-layout.module';
import { ComponentsModule } from '../../../components/components.module';

import { ResponsibilityQualificationComponent } from './responsibility-qualification.component';

@NgModule({
  declarations: [ResponsibilityQualificationComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppLayoutModule,
    ComponentsModule
  ],
  exports: [ResponsibilityQualificationComponent]
})
export class ResponsibilityQualificationModule { }
