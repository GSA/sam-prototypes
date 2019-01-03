import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromEntities from './store/reducers/entities.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EntitiesEffects } from './store/effects/entities.effects';
import { EntitiesListComponent } from './entities-list/entities-list.component';
import { EntitiesWorkspaceRoutingModule } from './entities-workspace-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EntitiesWorkspaceRoutingModule,
    StoreModule.forFeature('entities', fromEntities.reducer),
    EffectsModule.forFeature([EntitiesEffects])
  ],
  declarations: [EntitiesListComponent]
})
export class EntitiesWorkspaceModule { }
