import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamSearchInputModule } from '../../sam-ui-elements/sam-search-input/sam-search-input.module';
import { SamSubheaderComponent } from './sam-subheader.component';

@NgModule({
  imports: [
    CommonModule,
    SamSearchInputModule
  ],
  exports: [
    CommonModule,
  	SamSubheaderComponent
  ],
  declarations: [SamSubheaderComponent]
})
export class SamSubheaderModule { }
