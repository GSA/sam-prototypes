import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DatabankScheduledReportsComponent } from './databank-scheduled-reports.component';

describe('DatabankScheduledReportsComponent', () => {
  let component: DatabankScheduledReportsComponent;
  let fixture: ComponentFixture<DatabankScheduledReportsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabankScheduledReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabankScheduledReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
