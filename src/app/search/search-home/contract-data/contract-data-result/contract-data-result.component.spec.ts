import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractDataResultComponent } from './contract-data-result.component';

describe('ContractDataResultComponent', () => {
  let component: ContractDataResultComponent;
  let fixture: ComponentFixture<ContractDataResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractDataResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractDataResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
