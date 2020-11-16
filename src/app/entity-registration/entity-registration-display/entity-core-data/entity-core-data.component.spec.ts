import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityCoreDataComponent } from './entity-core-data.component';

describe('EntityCoreDataComponent', () => {
  let component: EntityCoreDataComponent;
  let fixture: ComponentFixture<EntityCoreDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityCoreDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityCoreDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
