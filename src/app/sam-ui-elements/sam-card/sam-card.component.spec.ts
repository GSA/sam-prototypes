import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamCardComponent } from './sam-card.component';

describe('SamCardComponent', () => {
  let component: SamCardComponent;
  let fixture: ComponentFixture<SamCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
