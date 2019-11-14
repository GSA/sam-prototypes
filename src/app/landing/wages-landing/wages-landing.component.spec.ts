import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WagesLandingComponent } from './wages-landing.component';

describe('WagesLandingComponent', () => {
  let component: WagesLandingComponent;
  let fixture: ComponentFixture<WagesLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WagesLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WagesLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
