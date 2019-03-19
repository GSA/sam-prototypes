import { SamLinkListModule } from './sam-link-list.module';

describe('SamLinkListModule', () => {
  let samLinkListModule: SamLinkListModule;

  beforeEach(() => {
    samLinkListModule = new SamLinkListModule();
  });

  it('should create an instance', () => {
    expect(samLinkListModule).toBeTruthy();
  });
});
