import { WorkspaceModule } from './workspace.module';

describe('WorkspaceModule', () => {
  let workspaceModule: WorkspaceModule;

  beforeEach(() => {
    workspaceModule = new WorkspaceModule();
  });

  it('should create an instance', () => {
    expect(workspaceModule).toBeTruthy();
  });
});
