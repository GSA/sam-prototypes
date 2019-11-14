import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaEditDetailsComponent } from './sa-edit-details.component';

describe('SaEditDetailsComponent', () => {
  let component: SaEditDetailsComponent;
  let fixture: ComponentFixture<SaEditDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaEditDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaEditDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
