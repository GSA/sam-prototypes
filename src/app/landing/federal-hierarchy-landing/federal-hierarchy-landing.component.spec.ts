import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FederalHierarchyLandingComponent } from './federal-hierarchy-landing.component';

describe('FederalHierarchyLandingComponent', () => {
  let component: FederalHierarchyLandingComponent;
  let fixture: ComponentFixture<FederalHierarchyLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FederalHierarchyLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FederalHierarchyLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
