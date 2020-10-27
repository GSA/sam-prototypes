import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AssistanceLandingComponent } from './assistance-landing.component';

describe('AssistanceLandingComponent', () => {
  let component: AssistanceLandingComponent;
  let fixture: ComponentFixture<AssistanceLandingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistanceLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
