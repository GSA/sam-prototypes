import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IntegrityComponent } from './integrity.component';

describe('IntegrityComponent', () => {
  let component: IntegrityComponent;
  let fixture: ComponentFixture<IntegrityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
