import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractOpportunityResultComponent } from './contract-opportunity-result.component';

describe('ContractOpportunityResultComponent', () => {
  let component: ContractOpportunityResultComponent;
  let fixture: ComponentFixture<ContractOpportunityResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractOpportunityResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractOpportunityResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
