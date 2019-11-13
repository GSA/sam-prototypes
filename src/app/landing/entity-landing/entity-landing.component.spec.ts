import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityLandingComponent } from './entity-landing.component';

describe('EntityLandingComponent', () => {
  let component: EntityLandingComponent;
  let fixture: ComponentFixture<EntityLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
