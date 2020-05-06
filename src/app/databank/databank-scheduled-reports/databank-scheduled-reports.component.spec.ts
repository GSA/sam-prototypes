import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabankScheduledReportsComponent } from './databank-scheduled-reports.component';

describe('DatabankScheduledReportsComponent', () => {
  let component: DatabankScheduledReportsComponent;
  let fixture: ComponentFixture<DatabankScheduledReportsComponent>;

  beforeEach(async(() => {
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
