import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityIntegrityComponent } from './entity-integrity.component';

describe('EntityIntegrityComponent', () => {
  let component: EntityIntegrityComponent;
  let fixture: ComponentFixture<EntityIntegrityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityIntegrityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityIntegrityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
