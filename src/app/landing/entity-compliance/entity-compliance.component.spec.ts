import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EntityComplianceComponent } from './entity-compliance.component';

describe('EntityComplianceComponent', () => {
  let component: EntityComplianceComponent;
  let fixture: ComponentFixture<EntityComplianceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityComplianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
