import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamSegmentComponent } from './sam-segment.component';

describe('SamSegmentComponent', () => {
  let component: SamSegmentComponent;
  let fixture: ComponentFixture<SamSegmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamSegmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
