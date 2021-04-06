import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingWorkspaceComponent } from './reporting-workspace.component';

describe('ReportingWorkspaceComponent', () => {
  let component: ReportingWorkspaceComponent;
  let fixture: ComponentFixture<ReportingWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportingWorkspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportingWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
