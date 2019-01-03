import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import * as fromEntities from './entities.reducer';

export interface EntitiesState {
	entities: fromEntities.State;
}

export interface State {
	entities: EntitiesState;
}

export const reducers: ActionReducerMap<EntitiesState> = {
	entities: fromEntities.reducer
};