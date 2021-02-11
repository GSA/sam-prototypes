import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExclusionsFederalComponent } from './exclusions-federal.component';

describe('ExclusionsFederalComponent', () => {
  let component: ExclusionsFederalComponent;
  let fixture: ComponentFixture<ExclusionsFederalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExclusionsFederalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclusionsFederalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
