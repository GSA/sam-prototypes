import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateEntityRelationshipsComponent } from './validate-entity-relationships.component';

describe('ValidateEntityRelationshipsComponent', () => {
  let component: ValidateEntityRelationshipsComponent;
  let fixture: ComponentFixture<ValidateEntityRelationshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateEntityRelationshipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateEntityRelationshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
