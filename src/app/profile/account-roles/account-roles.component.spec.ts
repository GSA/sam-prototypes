import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRolesComponent } from './account-roles.component';

describe('AccountRolesComponent', () => {
  let component: AccountRolesComponent;
  let fixture: ComponentFixture<AccountRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
