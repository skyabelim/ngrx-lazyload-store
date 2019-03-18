import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipDetailComponent } from './ship-detail.component';
import { Store, StoreModule } from '@ngrx/store';

describe('ShipDetailComponent', () => {
  let component: ShipDetailComponent;
  let fixture: ComponentFixture<ShipDetailComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ShipDetailComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipDetailComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
