import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AlertItemComponent } from './alert-item.component';

describe('AlertItemComponent', () => {
  let component: AlertItemComponent;
  let fixture: ComponentFixture<AlertItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
