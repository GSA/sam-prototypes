import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DatabankReportsComponent } from './databank-reports.component';

describe('DatabankReportsComponent', () => {
  let component: DatabankReportsComponent;
  let fixture: ComponentFixture<DatabankReportsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabankReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabankReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
