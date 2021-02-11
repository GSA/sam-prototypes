import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractDataLandingComponent } from './contract-data-landing.component';

describe('ContractDataLandingComponent', () => {
  let component: ContractDataLandingComponent;
  let fixture: ComponentFixture<ContractDataLandingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractDataLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractDataLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
