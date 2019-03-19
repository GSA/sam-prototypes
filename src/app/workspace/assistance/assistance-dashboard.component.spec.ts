import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceDashboardComponent } from './assistance-dashboard.component';

describe('AssistanceDashboardComponent', () => {
  let component: AssistanceDashboardComponent;
  let fixture: ComponentFixture<AssistanceDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistanceDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
