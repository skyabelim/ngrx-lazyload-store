import { Component, OnInit, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { Store } from '@ngrx/store'
import { isPlatformServer } from '@angular/common';

import * as reducers from '../app/store/reducers'
import * as authActions from '../app/store/actions/auth.actions'

import { Meta } from '@angular/platform-browser'
// import { STATE_CB } from './tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private store: Store<reducers.State>,

    @Inject(PLATFORM_ID) private _platformId,
    // @Optional() @Inject(STATE_CB) private _stateCb,

    private meta: Meta
  ) { }

  ngOnInit() {
    console.log("Heyyyy!!")

    if (isPlatformServer(this._platformId)) {
            
      console.log("on the server: " )
      this.meta.addTag({name: 'description', content: 'Title and Meta tags examples'})
      
      this.store.subscribe((state) => {
        console.log("subscribe-store:", state);
      })

    }
    
    this.store.dispatch(new authActions.LoadAuths())

  }

}
