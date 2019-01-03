import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamSidebarComponent } from './sam-sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
  	CommonModule,
  	SamSidebarComponent
  ],
  declarations: [SamSidebarComponent]
})
export class SamSidebarModule { }
