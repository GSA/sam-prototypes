import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceModelService } from './workspace-model.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class WorkspaceModelModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WorkspaceModelModule,
      providers: [ WorkspaceModelService ]
    };
  }
}