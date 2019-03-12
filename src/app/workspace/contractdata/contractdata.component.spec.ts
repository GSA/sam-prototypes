import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractdataComponent } from './contractdata.component';

describe('ContractdataComponent', () => {
  let component: ContractdataComponent;
  let fixture: ComponentFixture<ContractdataComponent>;

  beforeEach(async(() => {
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
