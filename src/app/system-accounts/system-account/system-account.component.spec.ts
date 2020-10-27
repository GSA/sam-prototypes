import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SystemAccountComponent } from './system-account.component';

describe('SystemAccountComponent', () => {
  let component: SystemAccountComponent;
  let fixture: ComponentFixture<SystemAccountComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
