import { EntitiesWorkspaceModule } from './entities-workspace.module';

describe('EntitiesWorkspaceModule', () => {
  let entitiesWorkspaceModule: EntitiesWorkspaceModule;

  beforeEach(() => {
    entitiesWorkspaceModule = new EntitiesWorkspaceModule();
  });

  it('should create an instance', () => {
    expect(entitiesWorkspaceModule).toBeTruthy();
  });
});
