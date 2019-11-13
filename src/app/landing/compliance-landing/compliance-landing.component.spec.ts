import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceLandingComponent } from './compliance-landing.component';

describe('ComplianceLandingComponent', () => {
  let component: ComplianceLandingComponent;
  let fixture: ComponentFixture<ComplianceLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplianceLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplianceLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
