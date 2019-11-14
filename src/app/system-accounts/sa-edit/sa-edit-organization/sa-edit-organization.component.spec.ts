import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaEditOrganizationComponent } from './sa-edit-organization.component';

describe('SaEditOrganizationComponent', () => {
  let component: SaEditOrganizationComponent;
  let fixture: ComponentFixture<SaEditOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaEditOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaEditOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
