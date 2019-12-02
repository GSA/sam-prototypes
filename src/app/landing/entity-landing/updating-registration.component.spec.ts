import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatingRegistrationComponent } from './updating-registration.component';

describe('UpdatingRegistrationComponent', () => {
  let component: UpdatingRegistrationComponent;
  let fixture: ComponentFixture<UpdatingRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatingRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatingRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
