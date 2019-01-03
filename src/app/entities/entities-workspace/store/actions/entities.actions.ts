import { Action } from '@ngrx/store';

export enum EntitiesActionTypes {
  LoadEntities = '[Entities] Load Entities',
  SetEntities =  '[Entities] Set Entities'
}

export class LoadEntities implements Action {
  readonly type = EntitiesActionTypes.LoadEntities;
}

export class SetEntities implements Action {
	readonly type = EntitiesActionTypes.SetEntities;
}

export type EntitiesActions = LoadEntities;
