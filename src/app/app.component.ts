import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'

import * as reducers from '../app/store/reducers'
import * as authActions from '../app/store/actions/auth.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private store: Store<reducers.State>
  ) { }

  ngOnInit() {
    console.log("Heyyyy!!")
    this.store.dispatch(new authActions.LoadAuths())
  }

}
