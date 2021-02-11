import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AssistancelistComponent } from './assistancelist.component';

describe('AssistancelistComponent', () => {
  let component: AssistancelistComponent;
  let fixture: ComponentFixture<AssistancelistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistancelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistancelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
