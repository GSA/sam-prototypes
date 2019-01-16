import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceDataComponent } from './performance-data.component';

describe('PerformanceDataComponent', () => {
  let component: PerformanceDataComponent;
  let fixture: ComponentFixture<PerformanceDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
