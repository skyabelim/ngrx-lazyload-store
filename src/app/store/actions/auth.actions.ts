// import { Action } from '@ngrx/store';
import { Action } from '../models/Action'

export enum AuthActionTypes {
  LoadAuths = '[Auth] Load Auths',
  SetAuth = '[Auth] Set Auths',
  SetAuthFailled = '[Auth] Set Auths Failled'
}

export class LoadAuths implements Action {
  readonly type = AuthActionTypes.LoadAuths;
}

export class SetAuths implements Action {
  readonly type = AuthActionTypes.SetAuth

  constructor(
    public payload: object
  ) { }
}

export class SetAuthsFailled implements Action {
  readonly type = AuthActionTypes.SetAuthFailled

  constructor(
    public payload: any
  ) { }
}


// export type AuthActions = LoadAuths | SetAuths;
