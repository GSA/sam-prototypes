import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FsdComponent } from './fsd.component';

describe('FsdComponent', () => {
  let component: FsdComponent;
  let fixture: ComponentFixture<FsdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FsdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
