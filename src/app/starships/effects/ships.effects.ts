import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
// import { Store } from '@ngrx/store';
// import * as fromStore from '../reducers';

import { concatMap, switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Action } from '../../store/models/Action'
import { ShipsActionTypes, LoadShipsSuccess, LoadShipsFailled } from '../actions/ships.actions';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ShipsEffects {

  @Effect()
  loadShips$ = this.actions$.pipe(
    ofType(ShipsActionTypes.LoadShips),
    switchMap((data: Action) => {
      return this.http.get<any[]>('https://swapi.co/api/starships/?page=' + data.payload).pipe(
        map(data => {
          return new LoadShipsSuccess(data)
        }),
        catchError(err => of(new LoadShipsFailled(err)))
      )
    })
  );

  constructor(
    private actions$: Actions<Action>,
    private http: HttpClient
  ) { }

}
