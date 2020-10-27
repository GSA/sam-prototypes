import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AssistanceLandingFederalComponent } from './assistance-landing-federal.component';

describe('AssistanceLandingFederalComponent', () => {
  let component: AssistanceLandingFederalComponent;
  let fixture: ComponentFixture<AssistanceLandingFederalComponent>;

  beforeEach(waitForAsync(() => {
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
