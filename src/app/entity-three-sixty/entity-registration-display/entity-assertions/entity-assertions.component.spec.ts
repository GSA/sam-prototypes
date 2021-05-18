import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityAssertionsComponent } from './entity-assertions.component';

describe('EntityAssertionsComponent', () => {
  let component: EntityAssertionsComponent;
  let fixture: ComponentFixture<EntityAssertionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityAssertionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityAssertionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
