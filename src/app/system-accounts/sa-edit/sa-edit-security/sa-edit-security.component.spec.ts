import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaEditSecurityComponent } from './sa-edit-security.component';

describe('SaEditSecurityComponent', () => {
  let component: SaEditSecurityComponent;
  let fixture: ComponentFixture<SaEditSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaEditSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaEditSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
