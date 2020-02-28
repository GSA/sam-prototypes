import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityResultComponent } from './entity-result.component';

describe('EntityResultComponent', () => {
  let component: EntityResultComponent;
  let fixture: ComponentFixture<EntityResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
