import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateTaxInformationComponent } from './validate-tax-information.component';

describe('ValidateTaxInformationComponent', () => {
  let component: ValidateTaxInformationComponent;
  let fixture: ComponentFixture<ValidateTaxInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateTaxInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateTaxInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
