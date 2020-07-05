import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WagesScaConformancesComponent } from './wages-sca-conformances.component';

describe('WagesScaConformancesComponent', () => {
  let component: WagesScaConformancesComponent;
  let fixture: ComponentFixture<WagesScaConformancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WagesScaConformancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WagesScaConformancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
