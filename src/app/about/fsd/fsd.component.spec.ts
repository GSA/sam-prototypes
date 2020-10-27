import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FsdComponent } from './fsd.component';

describe('FsdComponent', () => {
  let component: FsdComponent;
  let fixture: ComponentFixture<FsdComponent>;

  beforeEach(waitForAsync(() => {
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
