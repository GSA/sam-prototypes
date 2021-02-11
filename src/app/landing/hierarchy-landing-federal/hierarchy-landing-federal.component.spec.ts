import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HierarchyLandingFederalComponent } from './hierarchy-landing-federal.component';

describe('HierarchyLandingFederalComponent', () => {
  let component: HierarchyLandingFederalComponent;
  let fixture: ComponentFixture<HierarchyLandingFederalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HierarchyLandingFederalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HierarchyLandingFederalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
