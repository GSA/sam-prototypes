import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamFederalSiteBannerComponent } from './sam-federal-site-banner.component';

describe('SamFederalSiteBannerComponent', () => {
  let component: SamFederalSiteBannerComponent;
  let fixture: ComponentFixture<SamFederalSiteBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamFederalSiteBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamFederalSiteBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
