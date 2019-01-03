import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesHomeComponent } from './entities-home.component';

describe('EntitiesHomeComponent', () => {
  let component: EntitiesHomeComponent;
  let fixture: ComponentFixture<EntitiesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitiesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitiesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
