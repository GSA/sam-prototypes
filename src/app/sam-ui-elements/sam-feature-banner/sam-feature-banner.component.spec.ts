import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamFeatureBannerComponent } from './sam-feature-banner.component';

describe('SamFeatureBannerComponent', () => {
  let component: SamFeatureBannerComponent;
  let fixture: ComponentFixture<SamFeatureBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamFeatureBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamFeatureBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
