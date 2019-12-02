import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityStaticHelpComponent } from './entity-static-help.component';

describe('EntityStaticHelpComponent', () => {
  let component: EntityStaticHelpComponent;
  let fixture: ComponentFixture<EntityStaticHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityStaticHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityStaticHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
