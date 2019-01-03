import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamWorkspaceComponent } from './sam-workspace.component';

describe('SamWorkspaceComponent', () => {
  let component: SamWorkspaceComponent;
  let fixture: ComponentFixture<SamWorkspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamWorkspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
