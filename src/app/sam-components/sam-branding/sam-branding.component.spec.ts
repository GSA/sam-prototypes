import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamBrandingComponent } from './sam-branding.component';

describe('SamBrandingComponent', () => {
  let component: SamBrandingComponent;
  let fixture: ComponentFixture<SamBrandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamBrandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamBrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
