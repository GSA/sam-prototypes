import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DbaResultComponent } from './dba-result.component';

describe('DbaResultComponent', () => {
  let component: DbaResultComponent;
  let fixture: ComponentFixture<DbaResultComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DbaResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbaResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
