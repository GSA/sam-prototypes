import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamModelModule } from '../../model/model.module';
import { SamSearchInputComponent } from './sam-search-input.component';

@NgModule({
  imports: [
    CommonModule,
    SamModelModule
  ],
  exports: [
  	SamSearchInputComponent
  ],
  declarations: [SamSearchInputComponent]
})
export class SamSearchInputModule { }
