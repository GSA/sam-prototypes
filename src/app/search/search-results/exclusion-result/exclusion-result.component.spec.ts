import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusionResultComponent } from './exclusion-result.component';

describe('ExclusionResultComponent', () => {
  let component: ExclusionResultComponent;
  let fixture: ComponentFixture<ExclusionResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExclusionResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclusionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
