import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpFeatureComponent } from './help-feature.component';

describe('HelpFeatureComponent', () => {
  let component: HelpFeatureComponent;
  let fixture: ComponentFixture<HelpFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
