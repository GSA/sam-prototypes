import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpTermComponent } from './help-term.component';

describe('HelpTermComponent', () => {
  let component: HelpTermComponent;
  let fixture: ComponentFixture<HelpTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpTermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
