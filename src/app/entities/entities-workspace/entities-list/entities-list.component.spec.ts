import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesListComponent } from './entities-list.component';
import { Store, StoreModule } from '@ngrx/store';

describe('EntitiesListComponent', () => {
  let component: EntitiesListComponent;
  let fixture: ComponentFixture<EntitiesListComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ EntitiesListComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitiesListComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
