import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EntityRegistrationLandingComponent } from './entity-registration-landing.component';

describe('EntityRegistrationLandingComponent', () => {
  let component: EntityRegistrationLandingComponent;
  let fixture: ComponentFixture<EntityRegistrationLandingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityRegistrationLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityRegistrationLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
