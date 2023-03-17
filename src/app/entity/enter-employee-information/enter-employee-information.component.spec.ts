import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterEmployeeInformationComponent } from './enter-employee-information.component';

describe('EnterEmployeeInformationComponent', () => {
  let component: EnterEmployeeInformationComponent;
  let fixture: ComponentFixture<EnterEmployeeInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterEmployeeInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterEmployeeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
