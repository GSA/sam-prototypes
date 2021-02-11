import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WagesLandingComponent } from './wages-landing.component';

describe('WagesLandingComponent', () => {
  let component: WagesLandingComponent;
  let fixture: ComponentFixture<WagesLandingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WagesLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WagesLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
