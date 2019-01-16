import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractingHomeComponent } from './contracting-home.component';

describe('ContractingHomeComponent', () => {
  let component: ContractingHomeComponent;
  let fixture: ComponentFixture<ContractingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
