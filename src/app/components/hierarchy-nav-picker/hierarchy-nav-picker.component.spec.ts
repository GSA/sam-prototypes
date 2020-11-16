import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchyNavPickerComponent } from './hierarchy-nav-picker.component';

describe('HierarchyNavPickerComponent', () => {
  let component: HierarchyNavPickerComponent;
  let fixture: ComponentFixture<HierarchyNavPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HierarchyNavPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HierarchyNavPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
