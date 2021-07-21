import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubawardDataComponent } from './subaward-data.component';

describe('SubawardDataComponent', () => {
  let component: SubawardDataComponent;
  let fixture: ComponentFixture<SubawardDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubawardDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubawardDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
