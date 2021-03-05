import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashAlertComponent } from './splash-alert.component';

describe('SplashAlertComponent', () => {
  let component: SplashAlertComponent;
  let fixture: ComponentFixture<SplashAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplashAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
