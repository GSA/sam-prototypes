import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EntityRegistrationResultComponent } from './entity-registration-result.component';

describe('EntityRegistrationResultComponent', () => {
  let component: EntityRegistrationResultComponent;
  let fixture: ComponentFixture<EntityRegistrationResultComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityRegistrationResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityRegistrationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
