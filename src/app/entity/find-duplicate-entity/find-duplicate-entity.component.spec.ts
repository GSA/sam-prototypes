import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDuplicateEntityComponent } from './find-duplicate-entity.component';

describe('FindDuplicateEntityComponent', () => {
  let component: FindDuplicateEntityComponent;
  let fixture: ComponentFixture<FindDuplicateEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindDuplicateEntityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDuplicateEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
