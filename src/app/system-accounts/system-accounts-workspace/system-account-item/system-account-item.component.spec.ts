import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SystemAccountItemComponent } from './system-account-item.component';

describe('SystemAccountItemComponent', () => {
  let component: SystemAccountItemComponent;
  let fixture: ComponentFixture<SystemAccountItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAccountItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAccountItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
