import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingTileComponent } from './landing-tile.component';

describe('LandingTileComponent', () => {
  let component: LandingTileComponent;
  let fixture: ComponentFixture<LandingTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
