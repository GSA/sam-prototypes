import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExclusionsComponent } from './exclusions.component';

describe('ExclusionsComponent', () => {
  let component: ExclusionsComponent;
  let fixture: ComponentFixture<ExclusionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExclusionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclusionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
