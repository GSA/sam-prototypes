import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaEditComponent } from './sa-edit.component';

describe('SaEditComponent', () => {
  let component: SaEditComponent;
  let fixture: ComponentFixture<SaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
