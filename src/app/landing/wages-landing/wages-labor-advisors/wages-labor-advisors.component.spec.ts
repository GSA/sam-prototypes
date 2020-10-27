import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WagesLaborAdvisorsComponent } from './wages-labor-advisors.component';

describe('WagesLaborAdvisorsComponent', () => {
  let component: WagesLaborAdvisorsComponent;
  let fixture: ComponentFixture<WagesLaborAdvisorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WagesLaborAdvisorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WagesLaborAdvisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
