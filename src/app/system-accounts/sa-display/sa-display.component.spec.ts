import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaDisplayComponent } from './sa-display.component';

describe('SaDisplayComponent', () => {
  let component: SaDisplayComponent;
  let fixture: ComponentFixture<SaDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
