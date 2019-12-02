import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaReviewComponent } from './sa-review.component';

describe('SaReviewComponent', () => {
  let component: SaReviewComponent;
  let fixture: ComponentFixture<SaReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
