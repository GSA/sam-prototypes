import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractDataResultComponent } from './contract-data-result.component';

describe('ContractDataResultComponent', () => {
  let component: ContractDataResultComponent;
  let fixture: ComponentFixture<ContractDataResultComponent>;

  beforeEach(waitForAsync(() => {
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
