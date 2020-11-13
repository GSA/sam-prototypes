import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabankSearchItemComponent } from './databank-search-item.component';

describe('DatabankSearchItemComponent', () => {
  let component: DatabankSearchItemComponent;
  let fixture: ComponentFixture<DatabankSearchItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabankSearchItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabankSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
