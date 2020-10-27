import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OpportunitiesLandingFederalComponent } from './opportunities-landing-federal.component';

describe('OpportunitiesLandingFederalComponent', () => {
  let component: OpportunitiesLandingFederalComponent;
  let fixture: ComponentFixture<OpportunitiesLandingFederalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunitiesLandingFederalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunitiesLandingFederalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
