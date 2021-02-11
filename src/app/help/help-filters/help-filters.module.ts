import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpFiltersService } from './help-filters.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class HelpFiltersModule {
  static forRoot(): ModuleWithProviders<HelpFiltersModule> {
    return {
      ngModule: HelpFiltersModule,
      providers: [HelpFiltersService]
    };
  }

}
