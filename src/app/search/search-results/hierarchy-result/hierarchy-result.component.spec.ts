import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HierarchyResultComponent } from './hierarchy-result.component';

describe('HierarchyResultComponent', () => {
  let component: HierarchyResultComponent;
  let fixture: ComponentFixture<HierarchyResultComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HierarchyResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HierarchyResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
