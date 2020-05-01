import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTrackerComponent } from './status-tracker.component';

describe('StatusTrackerComponent', () => {
  let component: StatusTrackerComponent;
  let fixture: ComponentFixture<StatusTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
