import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabankHomeComponent } from './databank-home.component';

describe('DatabankHomeComponent', () => {
  let component: DatabankHomeComponent;
  let fixture: ComponentFixture<DatabankHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabankHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabankHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
