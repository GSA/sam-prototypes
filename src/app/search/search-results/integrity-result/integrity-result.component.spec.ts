import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IntegrityResultComponent } from './integrity-result.component';

describe('IntegrityResultComponent', () => {
  let component: IntegrityResultComponent;
  let fixture: ComponentFixture<IntegrityResultComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrityResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrityResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
