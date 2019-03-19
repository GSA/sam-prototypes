import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisasterResponseComponent } from './disaster-response.component';

describe('DisasterResponseComponent', () => {
  let component: DisasterResponseComponent;
  let fixture: ComponentFixture<DisasterResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisasterResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisasterResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
