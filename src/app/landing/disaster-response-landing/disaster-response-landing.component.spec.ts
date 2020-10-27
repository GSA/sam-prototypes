import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisasterResponseLandingComponent } from './disaster-response-landing.component';

describe('DisasterResponseLandingComponent', () => {
  let component: DisasterResponseLandingComponent;
  let fixture: ComponentFixture<DisasterResponseLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisasterResponseLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisasterResponseLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
