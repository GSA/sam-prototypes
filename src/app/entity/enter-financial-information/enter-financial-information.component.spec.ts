import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterFinancialInformationComponent } from './enter-financial-information.component';

describe('EnterFinancialInformationComponent', () => {
  let component: EnterFinancialInformationComponent;
  let fixture: ComponentFixture<EnterFinancialInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterFinancialInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterFinancialInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
