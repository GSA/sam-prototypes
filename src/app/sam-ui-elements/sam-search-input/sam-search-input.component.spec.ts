import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamSearchInputComponent } from './sam-search-input.component';

describe('SamSearchInputComponent', () => {
  let component: SamSearchInputComponent;
  let fixture: ComponentFixture<SamSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamSearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
