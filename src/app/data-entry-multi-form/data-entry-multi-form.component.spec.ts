import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntryMultiFormComponent } from './data-entry-multi-form.component';

describe('DataEntryMultiFormComponent', () => {
  let component: DataEntryMultiFormComponent;
  let fixture: ComponentFixture<DataEntryMultiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataEntryMultiFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEntryMultiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
