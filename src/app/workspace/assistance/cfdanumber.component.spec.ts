import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfdanumberComponent } from './cfdanumber.component';

describe('CfdanumberComponent', () => {
  let component: CfdanumberComponent;
  let fixture: ComponentFixture<CfdanumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfdanumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfdanumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
