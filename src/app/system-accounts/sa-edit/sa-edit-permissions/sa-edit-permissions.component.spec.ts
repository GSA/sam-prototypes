import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaEditPermissionsComponent } from './sa-edit-permissions.component';

describe('SaEditPermissionsComponent', () => {
  let component: SaEditPermissionsComponent;
  let fixture: ComponentFixture<SaEditPermissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaEditPermissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaEditPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
