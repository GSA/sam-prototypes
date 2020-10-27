import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrityDisplayComponent } from './integrity-display.component';

describe('IntegrityDisplayComponent', () => {
  let component: IntegrityDisplayComponent;
  let fixture: ComponentFixture<IntegrityDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrityDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrityDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
