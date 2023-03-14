import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterLegalInformationComponent } from './enter-legal-information.component';

describe('EnterLegalInformationComponent', () => {
  let component: EnterLegalInformationComponent;
  let fixture: ComponentFixture<EnterLegalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterLegalInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterLegalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
