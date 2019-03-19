import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesComponent } from './entities.component';
import { EntitiesRoutingModule } from './entities-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EntitiesRoutingModule
  ],
  declarations: [EntitiesComponent],
  exports: [EntitiesComponent]
})
export class EntitiesModule { }
