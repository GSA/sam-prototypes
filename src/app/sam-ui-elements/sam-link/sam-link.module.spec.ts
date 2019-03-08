import { SamLinkModule } from './sam-link.module';

describe('SamLinkModule', () => {
  let samLinkModule: SamLinkModule;

  beforeEach(() => {
    samLinkModule = new SamLinkModule();
  });

  it('should create an instance', () => {
    expect(samLinkModule).toBeTruthy();
  });
});
