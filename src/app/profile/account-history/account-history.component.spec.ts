import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccountHistoryComponent } from './account-history.component';

describe('AccountHistoryComponent', () => {
  let component: AccountHistoryComponent;
  let fixture: ComponentFixture<AccountHistoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
