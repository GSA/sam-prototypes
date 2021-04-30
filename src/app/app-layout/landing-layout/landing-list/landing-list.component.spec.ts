import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingListComponent } from './landing-list.component';

describe('LandingListComponent', () => {
  let component: LandingListComponent;
  let fixture: ComponentFixture<LandingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
