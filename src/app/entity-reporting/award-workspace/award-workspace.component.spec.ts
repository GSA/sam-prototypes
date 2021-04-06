import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardWorkspaceComponent } from './award-workspace.component';

describe('AwardWorkspaceComponent', () => {
  let component: AwardWorkspaceComponent;
  let fixture: ComponentFixture<AwardWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwardWorkspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
