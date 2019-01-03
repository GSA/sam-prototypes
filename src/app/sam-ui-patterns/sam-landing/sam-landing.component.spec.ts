import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamLandingComponent } from './sam-landing.component';

describe('SamLandingComponent', () => {
  let component: SamLandingComponent;
  let fixture: ComponentFixture<SamLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
