import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace.component';

import { AutocompleteSampleDataService } from './entities/entity-service/autocomplete-sample.service';

@NgModule({
  imports: [
    CommonModule,
    WorkspaceRoutingModule
  ],
  declarations: [WorkspaceComponent],
  providers: [],
  exports: [WorkspaceComponent]
})
export class WorkspaceModule {}
