import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityRepsCertsComponent } from './entity-reps-certs.component';

describe('EntityRepsCertsComponent', () => {
  let component: EntityRepsCertsComponent;
  let fixture: ComponentFixture<EntityRepsCertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityRepsCertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityRepsCertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
