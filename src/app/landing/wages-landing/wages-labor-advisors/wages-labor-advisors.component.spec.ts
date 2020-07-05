import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WagesLaborAdvisorsComponent } from './wages-labor-advisors.component';

describe('WagesLaborAdvisorsComponent', () => {
  let component: WagesLaborAdvisorsComponent;
  let fixture: ComponentFixture<WagesLaborAdvisorsComponent>;

  beforeEach(async(() => {
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
