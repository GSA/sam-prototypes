import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HierarchyPickerComponent } from './hierarchy-picker.component';

describe('HierarchyPickerComponent', () => {
  let component: HierarchyPickerComponent;
  let fixture: ComponentFixture<HierarchyPickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HierarchyPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HierarchyPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
