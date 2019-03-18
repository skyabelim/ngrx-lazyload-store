import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators'

import { Action } from '../models/Action'
import { AuthActionTypes, SetAuths, SetAuthsFailled } from '../actions/auth.actions'


@Injectable()
export class AuthEffects {

  @Effect()
  loadAuth$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionTypes.LoadAuths),
    switchMap(() => {
      return this.http.get<string>('https://swapi.co/api/people/1/').pipe(
        map(person => new SetAuths({
          userName: person['name'].replace(' ', ''),
          friendlyName: person['name']
        })),
        catchError(err => of(new SetAuthsFailled({ error: err, messagge: 'something went terribly wrong' })))
      )
    })
  )

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) { }

}
