import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionallocationComponent } from './regionallocation.component';

describe('RegionallocationComponent', () => {
  let component: RegionallocationComponent;
  let fixture: ComponentFixture<RegionallocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionallocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionallocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
