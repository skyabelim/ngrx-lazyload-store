import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../reducers';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-ship-detail',
  templateUrl: './ship-detail.component.html',
  styleUrls: ['./ship-detail.component.css']
})
export class ShipDetailComponent implements OnInit {

  spaceShip$: Observable<object>

  constructor(
    private store: Store<fromStore.State>
  ) { }

  ngOnInit() {
    this.spaceShip$ = this.store.select(fromStore.getCurrentShip)
  }

}
