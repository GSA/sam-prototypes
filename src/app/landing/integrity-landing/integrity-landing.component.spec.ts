import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrityLandingComponent } from './integrity-landing.component';

describe('IntegrityLandingComponent', () => {
  let component: IntegrityLandingComponent;
  let fixture: ComponentFixture<IntegrityLandingComponent>;

  beforeEach(async(() => {
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
