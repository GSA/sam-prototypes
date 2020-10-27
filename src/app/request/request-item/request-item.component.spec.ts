import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RequestItemComponent } from './request-item.component';

describe('RequestItemComponent', () => {
  let component: RequestItemComponent;
  let fixture: ComponentFixture<RequestItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
