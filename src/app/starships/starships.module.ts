import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromShips from './reducers/ships.reducer';
import { ShipsEffects } from './effects/ships.effects';

import { ShipListComponent } from './ship-list/ship-list.component';
import { ShipDetailComponent } from './ship-detail/ship-detail.component';


const routes: Routes = [
  { path: '', component:  ShipListComponent },
  { path: 'shipdetail', component: ShipDetailComponent }
]

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('ships', fromShips.reducer),
    EffectsModule.forFeature([ShipsEffects]),
    RouterModule.forChild(routes)
  ],
  declarations: [
    ShipListComponent,
    ShipDetailComponent
  ]
})
export class StarshipsModule { }
