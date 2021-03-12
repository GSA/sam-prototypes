import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashTileComponent } from './splash-tile.component';

describe('SplashTileComponent', () => {
  let component: SplashTileComponent;
  let fixture: ComponentFixture<SplashTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplashTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
