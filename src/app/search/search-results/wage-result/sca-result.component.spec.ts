import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScaResultComponent } from './sca-result.component';

describe('ScaResultComponent', () => {
  let component: ScaResultComponent;
  let fixture: ComponentFixture<ScaResultComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
