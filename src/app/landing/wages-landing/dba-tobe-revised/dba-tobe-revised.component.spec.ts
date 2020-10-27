import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DbaTobeRevisedComponent } from './dba-tobe-revised.component';

describe('DbaTobeRevisedComponent', () => {
  let component: DbaTobeRevisedComponent;
  let fixture: ComponentFixture<DbaTobeRevisedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DbaTobeRevisedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbaTobeRevisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
