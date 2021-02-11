import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LogoPolicyComponent } from './logo-policy.component';

describe('LogoPolicyComponent', () => {
  let component: LogoPolicyComponent;
  let fixture: ComponentFixture<LogoPolicyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
