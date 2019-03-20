import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { BrowserModule } from '@angular/platform-browser'

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

// import { STATE_CB } from "../app/tokens";
// import { State } from '@ngrx/store';
// import * as reducers from './store/reducers'

@NgModule({
  imports: [
    AppModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ServerModule,
    ModuleMapLoaderModule,
  ],
  // providers: [
  //   {
  //     provide: STATE_CB,
  //     useValue: (state) => {
  //       saveState = state
  //     }
  //   }
  // ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}

// export let saveState: State<reducers.State>
