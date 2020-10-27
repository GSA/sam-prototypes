import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContractdataComponent } from './contractdata.component';

describe('ContractdataComponent', () => {
  let component: ContractdataComponent;
  let fixture: ComponentFixture<ContractdataComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
