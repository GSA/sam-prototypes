import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WagesDbaConformancesComponent } from './wages-dba-conformances.component';

describe('WagesDbaConformancesComponent', () => {
  let component: WagesDbaConformancesComponent;
  let fixture: ComponentFixture<WagesDbaConformancesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WagesDbaConformancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WagesDbaConformancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
