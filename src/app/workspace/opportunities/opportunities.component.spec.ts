import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OpportunitiesComponent } from './opportunities.component';

describe('OpportunitiesComponent', () => {
  let component: OpportunitiesComponent;
  let fixture: ComponentFixture<OpportunitiesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
