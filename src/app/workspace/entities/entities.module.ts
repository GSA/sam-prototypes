import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesComponent } from './entities.component';
import { EntitiesRoutingModule } from './entities-routing.module';
import { EntityServiceModule } from './entity-service/entity-service.module';

@NgModule({
  imports: [
    CommonModule,
    EntitiesRoutingModule,
    EntityServiceModule.forRoot()
  ],
  declarations: [EntitiesComponent],
  exports: [EntitiesComponent]
})
export class EntitiesModule { }
