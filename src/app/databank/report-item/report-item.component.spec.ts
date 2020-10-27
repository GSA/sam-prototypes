import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReportItemComponent } from './report-item.component';

describe('ReportItemComponent', () => {
  let component: ReportItemComponent;
  let fixture: ComponentFixture<ReportItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
