import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceLandingFederalComponent } from './assistance-landing-federal.component';

describe('AssistanceLandingFederalComponent', () => {
  let component: AssistanceLandingFederalComponent;
  let fixture: ComponentFixture<AssistanceLandingFederalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistanceLandingFederalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceLandingFederalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
