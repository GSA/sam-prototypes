import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistancelistItemComponent } from './assistancelist-item.component';

describe('AssistancelistItemComponent', () => {
  let component: AssistancelistItemComponent;
  let fixture: ComponentFixture<AssistancelistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistancelistItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistancelistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
