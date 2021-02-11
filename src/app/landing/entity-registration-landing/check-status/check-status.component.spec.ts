import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CheckStatusComponent } from './check-status.component';

describe('CheckStatusComponent', () => {
  let component: CheckStatusComponent;
  let fixture: ComponentFixture<CheckStatusComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
