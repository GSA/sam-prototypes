import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingAccordionComponent } from './landing-accordion.component';

describe('LandingAccordionComponent', () => {
  let component: LandingAccordionComponent;
  let fixture: ComponentFixture<LandingAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
