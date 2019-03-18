import { Action } from '../../store/models/Action'
import { ShipsActionTypes } from '../actions/ships.actions';

export interface State {
  allShips: any[]
  error: any
  next: string
  prev: string
  count: number
  page: number
  currentShip: any[]
}

const initialState: State = {
  allShips: [],
  error: null,
  next: null,
  prev: null,
  count: null,
  page: 1,
  currentShip: []
};

export function reducer(state = initialState, action: Action): State {
  
  switch (action.type) {
    
    case ShipsActionTypes.LoadShips:
      return {
        ...state,
        page: action.payload
      }

    case ShipsActionTypes.LoadShipsSuccess:
      return {
        ...state,
        allShips: action.payload['results'],
        next: action.payload['next'],
        prev: action.payload['previous'],
        count: action.payload['count']
      }

    case ShipsActionTypes.LoadShipsFailled:
      return {
        ...state,
        error: { error: action.payload, messagge: 'something went terribly wrong' }
      }
    
    case ShipsActionTypes.LoadShipWithName:
      return {
        ...state,
        currentShip: state.allShips.filter(ship => ship.name === action.payload)[0]
      }

    default:
      return state;
  }
}

export const getAllShips = (state: State) => state.allShips
// export const getPrevPage = (state: State)  => state.prev
// export const getNextPage = (state: State) => state.next
export const getCount = (state: State) => state.count
export const getPage = (state: State) => state.page
export const getCurrentShip = (state: State) => state.currentShip
