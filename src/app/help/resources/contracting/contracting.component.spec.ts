import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractingComponent } from './contracting.component';

describe('ContractingComponent', () => {
  let component: ContractingComponent;
  let fixture: ComponentFixture<ContractingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
