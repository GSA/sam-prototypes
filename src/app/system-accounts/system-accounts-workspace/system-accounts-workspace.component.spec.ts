import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SystemAccountsWorkspaceComponent } from './system-accounts-workspace.component';

describe('SystemAccountsWorkspaceComponent', () => {
  let component: SystemAccountsWorkspaceComponent;
  let fixture: ComponentFixture<SystemAccountsWorkspaceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAccountsWorkspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAccountsWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
