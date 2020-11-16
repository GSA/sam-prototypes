import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabankReportComponent } from './databank-report.component';

describe('DatabankReportComponent', () => {
  let component: DatabankReportComponent;
  let fixture: ComponentFixture<DatabankReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabankReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabankReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
