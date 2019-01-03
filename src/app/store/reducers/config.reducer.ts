import { Action } from '@ngrx/store';
import { MenuItem } from '../../sam-ui-elements/menu/menu-item';
import { DomainMenu } from './domains.config';
import * as configActions from '../actions/config.actions';


export interface State {
    domainMenu: MenuItem[];
    currentDomain: MenuItem;
}

export const initialState: State = {
	domainMenu: DomainMenu,
	currentDomain: DomainMenu[0]
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}
