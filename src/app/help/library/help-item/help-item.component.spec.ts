import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpItemComponent } from './help-item.component';

describe('HelpItemComponent', () => {
  let component: HelpItemComponent;
  let fixture: ComponentFixture<HelpItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
