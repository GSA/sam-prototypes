import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamModelService } from './sam-model.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SamModelModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SamModelModule,
      providers: [ SamModelService ]
    };
  }
}
