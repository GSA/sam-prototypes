import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomerServiceComponent } from './customer-service.component';

describe('CustomerServiceComponent', () => {
  let component: CustomerServiceComponent;
  let fixture: ComponentFixture<CustomerServiceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
