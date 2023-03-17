import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateCageInformationComponent } from './validate-cage-information.component';

describe('ValidateCageInformationComponent', () => {
  let component: ValidateCageInformationComponent;
  let fixture: ComponentFixture<ValidateCageInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateCageInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateCageInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
