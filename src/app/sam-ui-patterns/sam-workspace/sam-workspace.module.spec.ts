import { SamWorkspaceModule } from './sam-workspace.module';

describe('SamWorkspaceModule', () => {
  let samWorkspaceModule: SamWorkspaceModule;

  beforeEach(() => {
    samWorkspaceModule = new SamWorkspaceModule();
  });

  it('should create an instance', () => {
    expect(samWorkspaceModule).toBeTruthy();
  });
});
