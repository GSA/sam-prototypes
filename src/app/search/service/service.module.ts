import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamSearchService } from './sam-search.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SearchServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SearchServiceModule,
      providers: [ SamSearchService ]
    };
  }
}
