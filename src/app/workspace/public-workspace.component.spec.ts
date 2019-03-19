import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicWorkspaceComponent } from './public-workspace.component';

describe('PublicWorkspaceComponent', () => {
  let component: PublicWorkspaceComponent;
  let fixture: ComponentFixture<PublicWorkspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicWorkspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
