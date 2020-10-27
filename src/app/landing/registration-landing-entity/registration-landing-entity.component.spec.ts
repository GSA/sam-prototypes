import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegistrationLandingEntityComponent } from './registration-landing-entity.component';

describe('RegistrationLandingEntityComponent', () => {
  let component: RegistrationLandingEntityComponent;
  let fixture: ComponentFixture<RegistrationLandingEntityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationLandingEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationLandingEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
