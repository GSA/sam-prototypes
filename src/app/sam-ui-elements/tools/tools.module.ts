import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamVerticalToolbarComponent } from './sam-vertical-toolbar/sam-vertical-toolbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
  	SamVerticalToolbarComponent
  ],
  declarations: [SamVerticalToolbarComponent]
})
export class SamToolsModule { }
