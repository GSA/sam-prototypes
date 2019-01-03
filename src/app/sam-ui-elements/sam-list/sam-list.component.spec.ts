import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamListComponent } from './sam-list.component';

describe('SamListComponent', () => {
  let component: SamListComponent;
  let fixture: ComponentFixture<SamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
