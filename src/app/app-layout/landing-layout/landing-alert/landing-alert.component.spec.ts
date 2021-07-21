import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingAlertComponent } from './landing-alert.component';

describe('LandingAlertComponent', () => {
  let component: LandingAlertComponent;
  let fixture: ComponentFixture<LandingAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
