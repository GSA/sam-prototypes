import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamVerticalToolbarComponent } from './sam-vertical-toolbar.component';

describe('SamVerticalToolbarComponent', () => {
  let component: SamVerticalToolbarComponent;
  let fixture: ComponentFixture<SamVerticalToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamVerticalToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamVerticalToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
