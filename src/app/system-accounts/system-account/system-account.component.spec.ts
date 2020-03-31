import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAccountComponent } from './system-account.component';

describe('SystemAccountComponent', () => {
  let component: SystemAccountComponent;
  let fixture: ComponentFixture<SystemAccountComponent>;

  beforeEach(async(() => {
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
