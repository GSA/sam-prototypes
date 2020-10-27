import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AgencyPickerComponent } from './agency-picker.component';

describe('AgencyPickerComponent', () => {
  let component: AgencyPickerComponent;
  let fixture: ComponentFixture<AgencyPickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
