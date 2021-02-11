import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EntityRegistrationDisplayComponent } from './entity-registration-display.component';

describe('EntityRegistrationDisplayComponent', () => {
  let component: EntityRegistrationDisplayComponent;
  let fixture: ComponentFixture<EntityRegistrationDisplayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityRegistrationDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityRegistrationDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
