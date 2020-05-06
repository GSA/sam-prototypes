import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractDataLandingComponent } from './contract-data-landing.component';

describe('ContractDataLandingComponent', () => {
  let component: ContractDataLandingComponent;
  let fixture: ComponentFixture<ContractDataLandingComponent>;

  beforeEach(async(() => {
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
