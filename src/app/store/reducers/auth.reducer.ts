//nimport { Action } from '@ngrx/store';

// Updated version of Action interface
import { Action } from '../models/Action'
import { AuthActionTypes }  from '../actions/auth.actions'


export interface State {
  userName?: string,
  friendlyName?: string,
  error?: any
}

export const initialState: State = {
  userName: null,
  friendlyName: null,
  error: null
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case AuthActionTypes.SetAuth:
      return {
        ...state,
        userName: action.payload['userName'],
        friendlyName: action.payload['friendlyName']
      }
    case AuthActionTypes.SetAuthFailled:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}

export const getUserName = (state: State) => state.userName
export const getFriendlyName = (state: State) => state.friendlyName
