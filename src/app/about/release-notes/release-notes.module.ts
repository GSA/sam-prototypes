import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReleaseNotesRoutingModule } from './release-notes-routing.module';
import { ReleaseNotesComponent } from './release-notes.component';

@NgModule({
  declarations: [ReleaseNotesComponent],
  imports: [
    CommonModule,
    ReleaseNotesRoutingModule
  ],
  exports: [ReleaseNotesComponent]
})
export class ReleaseNotesModule { }
