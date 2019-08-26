import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusionComponent } from './exclusion.component';

describe('ExclusionComponent', () => {
  let component: ExclusionComponent;
  let fixture: ComponentFixture<ExclusionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExclusionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
