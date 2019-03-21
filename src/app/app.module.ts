import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { reducers, metaReducers } from './store/reducers';

import { AuthEffects } from './store/effects/auth.effects';
import { getInitialState } from './tokens'


// import * as reducers from '../app/store/reducers'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { 
      // initialState: getInitialState, // initialize the store with the store from the server - NOT WORKING!
      metaReducers,
    }),
    EffectsModule.forRoot([AuthEffects]),
    // !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
