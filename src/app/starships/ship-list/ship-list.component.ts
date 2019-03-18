import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { concatMap, switchMap, catchError, map, count } from 'rxjs/operators';

import * as fromStore from '../reducers';
// import * as fromRoot from '../../store/reducers'

// import { Action } from '../../store/models/Action'
import { LoadShips, LoadShipWithName } from '../actions/ships.actions';


@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent implements OnInit {

  user$: Observable<string>
  shipslist$: Observable<string[]>
  count$: Observable<number>
  // prev$: Observable<string>
  // next$: Observable<string>
  page$: Observable<number>
  // spaceShip$: Observable<object>

  private currentPage: number
  private totalShips: number
  public totalPages: number[]
  public numPages: number

  constructor(
    private store: Store<fromStore.State>
  ) {
    this.user$ = this.store.select(fromStore.getFriendlyName)
    this.shipslist$ = this.store.select(fromStore.getAllShips)
    this.count$ = this.store.select(fromStore.getCount)
    this.page$ = this.store.select(fromStore.getPage)
    // this.spaceShip$ = this.store.select(fromStore.getCurrentShip)
   }

  ngOnInit() {

    this.page$.forEach(page => {
      this.currentPage = page
    })

    this.count$.forEach(count => {
      this.totalShips = count
      this.totalPages = []
      this.numPages = Math.ceil(count/10)
      for (let x = 1; x <= this.numPages; x++) {
        this.totalPages.push(x)
      }
    })

    this.store.dispatch(new LoadShips(this.currentPage))

  }

  prevPage(): void {
    this.currentPage > 1 && this.store.dispatch(new LoadShips(this.currentPage-1))
  }
  
  nextPage(): void {
    this.currentPage < this.totalShips && this.store.dispatch(new LoadShips(this.currentPage+1))
  }

  setShip(name: string): void {
    this.store.dispatch(new LoadShipWithName(name))
  }

  gotoPage(page: number): void {
    this.store.dispatch(new LoadShips(page))
  }

}
