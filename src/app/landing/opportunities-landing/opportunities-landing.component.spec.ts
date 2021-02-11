import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OpportunitiesLandingComponent } from './opportunities-landing.component';

describe('OpportunitiesLandingComponent', () => {
  let component: OpportunitiesLandingComponent;
  let fixture: ComponentFixture<OpportunitiesLandingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunitiesLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunitiesLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
