import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpService } from './help.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class HelpServiceModule { 
  static forRoot(): ModuleWithProviders<HelpServiceModule> {
    return {
      ngModule: HelpServiceModule,
      providers: [ HelpService ]
    };
  }
}
