import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WagesAamsComponent } from './wages-aams.component';

describe('WagesAamsComponent', () => {
  let component: WagesAamsComponent;
  let fixture: ComponentFixture<WagesAamsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WagesAamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WagesAamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
