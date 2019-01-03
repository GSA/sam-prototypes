import { SamFooterModule } from './sam-footer.module';

describe('SamFooterModule', () => {
  let samFooterModule: SamFooterModule;

  beforeEach(() => {
    samFooterModule = new SamFooterModule();
  });

  it('should create an instance', () => {
    expect(samFooterModule).toBeTruthy();
  });
});
