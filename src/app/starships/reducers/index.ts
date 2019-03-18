import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store'

import * as fromRoot from '../../store/reducers'
import * as fromShips from './ships.reducer'

export interface StarshipsState {
  ships: fromShips.State
}

export interface State extends fromRoot.State {
  ships: StarshipsState
}

export const reducers: ActionReducerMap<StarshipsState> = {
  ships: fromShips.reducer
}

const selectShipsStates = createFeatureSelector<fromShips.State>('ships')
export const getAllShips = createSelector(selectShipsStates, fromShips.getAllShips)
// export const getPrevPage = createSelector(selectShipsStates, fromShips.getPrevPage)
// export const getNextPage = createSelector(selectShipsStates, fromShips.getNextPage)
export const getCount = createSelector(selectShipsStates, fromShips.getCount)
export const getPage = createSelector(selectShipsStates, fromShips.getPage)
export const getCurrentShip = createSelector(selectShipsStates, fromShips.getCurrentShip)

export const getFriendlyName = fromRoot.getFriendlyName