import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitiesLandingFederalComponent } from './opportunities-landing-federal.component';

describe('OpportunitiesLandingFederalComponent', () => {
  let component: OpportunitiesLandingFederalComponent;
  let fixture: ComponentFixture<OpportunitiesLandingFederalComponent>;

  beforeEach(async(() => {
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
