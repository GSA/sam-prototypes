import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceResultComponent } from './assistance-result.component';

describe('AssistanceResultComponent', () => {
  let component: AssistanceResultComponent;
  let fixture: ComponentFixture<AssistanceResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistanceResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
