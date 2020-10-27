import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HierarchyLandingComponent } from './hierarchy-landing.component';

describe('HierarchyLandingComponent', () => {
  let component: HierarchyLandingComponent;
  let fixture: ComponentFixture<HierarchyLandingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HierarchyLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HierarchyLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
