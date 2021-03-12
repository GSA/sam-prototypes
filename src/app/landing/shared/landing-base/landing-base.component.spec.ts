import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingBaseComponent } from './landing-base.component';

describe('LandingBaseComponent', () => {
  let component: LandingBaseComponent;
  let fixture: ComponentFixture<LandingBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
