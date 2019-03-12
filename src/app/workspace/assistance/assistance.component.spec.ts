import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceComponent } from './assistance.component';

describe('AssistanceComponent', () => {
  let component: AssistanceComponent;
  let fixture: ComponentFixture<AssistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
