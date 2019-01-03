import { Action } from '@ngrx/store';
import { EntitiesActions, EntitiesActionTypes } from '../actions/entities.actions';

export interface State {
	entities: any[];
}

export const initialState: State = {
	entities: []
};

export function reducer(state = initialState, action: EntitiesActions): State {
  switch (action.type) {

    case EntitiesActionTypes.LoadEntities:
      return state;


    default:
      return state;
  }
}
