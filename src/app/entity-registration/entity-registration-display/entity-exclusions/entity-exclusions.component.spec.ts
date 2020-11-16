import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityExclusionsComponent } from './entity-exclusions.component';

describe('EntityExclusionsComponent', () => {
  let component: EntityExclusionsComponent;
  let fixture: ComponentFixture<EntityExclusionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityExclusionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityExclusionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
