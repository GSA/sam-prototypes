import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromEntities from './store/reducers/entities.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EntitiesEffects } from './store/effects/entities.effects';
import { SamSidebarModule } from '../../sam-ui-elements/sam-sidebar/sam-sidebar.module';
import { SamSearchInputModule } from '../../sam-ui-elements/sam-search-input/sam-search-input.module';
import { EntitiesListComponent } from './entities-list/entities-list.component';
import { EntitiesWorkspaceRoutingModule } from './entities-workspace-routing.module';
import { SearchListServiceModule } from '@gsa-sam/layouts';

@NgModule({
  imports: [
    CommonModule,
    SamSidebarModule,
    SamSearchInputModule,
    EntitiesWorkspaceRoutingModule,
    StoreModule.forFeature('entities', fromEntities.reducer),
    EffectsModule.forFeature([EntitiesEffects]),
    SearchListServiceModule
  ],
  declarations: [EntitiesListComponent],
  providers: []
})
export class EntitiesWorkspaceModule { }
