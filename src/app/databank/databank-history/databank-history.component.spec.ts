import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DatabankHistoryComponent } from './databank-history.component';

describe('DatabankHistoryComponent', () => {
  let component: DatabankHistoryComponent;
  let fixture: ComponentFixture<DatabankHistoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabankHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabankHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
