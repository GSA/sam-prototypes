import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrityResultComponent } from './integrity-result.component';

describe('IntegrityResultComponent', () => {
  let component: IntegrityResultComponent;
  let fixture: ComponentFixture<IntegrityResultComponent>;

  beforeEach(async(() => {
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
