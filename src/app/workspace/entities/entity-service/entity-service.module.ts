import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityService } from './entity.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class EntityServiceModule {   

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EntityServiceModule,
      providers: [ EntityService ]
    };
  }}
