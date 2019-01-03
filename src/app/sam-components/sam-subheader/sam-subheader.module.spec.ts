import { SamSubheaderModule } from './sam-subheader.module';

describe('SamSubheaderModule', () => {
  let samSubheaderModule: SamSubheaderModule;

  beforeEach(() => {
    samSubheaderModule = new SamSubheaderModule();
  });

  it('should create an instance', () => {
    expect(samSubheaderModule).toBeTruthy();
  });
});
