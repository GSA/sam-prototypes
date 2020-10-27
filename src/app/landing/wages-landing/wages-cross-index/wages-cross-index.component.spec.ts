import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WagesCrossIndexComponent } from './wages-cross-index.component';

describe('WagesCrossIndexComponent', () => {
  let component: WagesCrossIndexComponent;
  let fixture: ComponentFixture<WagesCrossIndexComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WagesCrossIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WagesCrossIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
