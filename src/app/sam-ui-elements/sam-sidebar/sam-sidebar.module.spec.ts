import { SamSidebarModule } from './sam-sidebar.module';

describe('SamSidebarModule', () => {
  let samSidebarModule: SamSidebarModule;

  beforeEach(() => {
    samSidebarModule = new SamSidebarModule();
  });

  it('should create an instance', () => {
    expect(samSidebarModule).toBeTruthy();
  });
});
