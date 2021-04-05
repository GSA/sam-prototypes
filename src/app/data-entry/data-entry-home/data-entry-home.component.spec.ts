import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntryHomeComponent } from './data-entry-home.component';

describe('DataEntryHomeComponent', () => {
  let component: DataEntryHomeComponent;
  let fixture: ComponentFixture<DataEntryHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataEntryHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEntryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
