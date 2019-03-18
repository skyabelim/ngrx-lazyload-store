import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as reducers from '../store/reducers'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name$: Observable<string>

  constructor(
    private store: Store<reducers.State>
  ) { }

  ngOnInit() {
    this.name$ = this.store.select(reducers.getFriendlyName)
  }

}
