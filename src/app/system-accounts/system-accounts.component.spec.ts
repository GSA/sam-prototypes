import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAccountsComponent } from './system-accounts.component';

describe('SystemAccountsComponent', () => {
  let component: SystemAccountsComponent;
  let fixture: ComponentFixture<SystemAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
