import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamHeaderComponent } from './sam-header.component';

describe('SamHeaderComponent', () => {
  let component: SamHeaderComponent;
  let fixture: ComponentFixture<SamHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
