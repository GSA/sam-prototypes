import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IntegrityLandingComponent } from './integrity-landing.component';

describe('IntegrityLandingComponent', () => {
  let component: IntegrityLandingComponent;
  let fixture: ComponentFixture<IntegrityLandingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrityLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrityLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
