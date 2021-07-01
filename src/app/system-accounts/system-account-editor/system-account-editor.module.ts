import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemAccountEditorRoutingModule } from './system-account-editor-routing.module';
import { SystemAccountEditorComponent } from './system-account-editor.component';


@NgModule({
  declarations: [SystemAccountEditorComponent],
  imports: [
    CommonModule,
    SystemAccountEditorRoutingModule
  ],
  exports: [SystemAccountEditorComponent]
})
export class SystemAccountEditorModule { }
