import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

@Injectable()
export class EntitiesEffects {

/**
  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(EntitiesActionTypes.LoadEntities));
*/
  constructor(private actions$: Actions) {}
}
