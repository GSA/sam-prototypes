import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbaResultComponent } from './dba-result.component';

describe('DbaResultComponent', () => {
  let component: DbaResultComponent;
  let fixture: ComponentFixture<DbaResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbaResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbaResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
