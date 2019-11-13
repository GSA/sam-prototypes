import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitiesLandingComponent } from './opportunities-landing.component';

describe('OpportunitiesLandingComponent', () => {
  let component: OpportunitiesLandingComponent;
  let fixture: ComponentFixture<OpportunitiesLandingComponent>;

  beforeEach(async(() => {
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
