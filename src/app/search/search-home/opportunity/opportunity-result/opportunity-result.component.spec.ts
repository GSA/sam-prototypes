import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityResultComponent } from './opportunity-result.component';

describe('OpportunityResultComponent', () => {
  let component: OpportunityResultComponent;
  let fixture: ComponentFixture<OpportunityResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
