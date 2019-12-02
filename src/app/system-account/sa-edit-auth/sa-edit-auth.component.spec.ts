import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaEditAuthComponent } from './sa-edit-auth.component';

describe('SaEditAuthComponent', () => {
  let component: SaEditAuthComponent;
  let fixture: ComponentFixture<SaEditAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaEditAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaEditAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
