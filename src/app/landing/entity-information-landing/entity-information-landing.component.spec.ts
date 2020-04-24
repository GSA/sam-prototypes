import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityInformationLandingComponent } from './entity-information-landing.component';

describe('EntityInformationLandingComponent', () => {
  let component: EntityInformationLandingComponent;
  let fixture: ComponentFixture<EntityInformationLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityInformationLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityInformationLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
