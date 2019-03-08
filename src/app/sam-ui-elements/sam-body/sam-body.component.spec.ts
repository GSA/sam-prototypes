import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamBodyComponent } from './sam-body.component';

describe('SamBodyComponent', () => {
  let component: SamBodyComponent;
  let fixture: ComponentFixture<SamBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
