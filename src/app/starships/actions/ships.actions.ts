// import { Action } from '@ngrx/store';
import { Action } from '../../store/models/Action'

export enum ShipsActionTypes {
  LoadShips = '[Ships] Load Ships',
  LoadShipsSuccess = '[Ships] Load Ships Success',
  LoadShipsFailled = '[Ships] Load Ships Failled',
  // LoadShipsPage = '[Ships] Load Ships Page',
  LoadShipWithName = '[Ship] Load Ship Details'
}

export class LoadShips implements Action {
  readonly type = ShipsActionTypes.LoadShips;

  constructor(
    public payload: number
  ) { }
}

export class LoadShipWithName implements Action {
  readonly type = ShipsActionTypes.LoadShipWithName;

  constructor(
    public payload: string
  ) { 
    console.log("Load Ship With Name: ", this.payload)
  }
}

export class LoadShipsSuccess implements Action {
  readonly type = ShipsActionTypes.LoadShipsSuccess;

  constructor(
    public payload: object[]
  ) {
    console.log("Action Success with payload: ", this.payload)
  }
}

export class LoadShipsFailled implements Action {
  readonly type = ShipsActionTypes.LoadShipsFailled;

  constructor(
    public payload: any
  ) {
    console.log("Action Load Ships Failled with error: ", this.payload)
  }
}

