import { SamFeatureBannerModule } from './sam-feature-banner.module';

describe('SamFeatureBannerModule', () => {
  let samFeatureBannerModule: SamFeatureBannerModule;

  beforeEach(() => {
    samFeatureBannerModule = new SamFeatureBannerModule();
  });

  it('should create an instance', () => {
    expect(samFeatureBannerModule).toBeTruthy();
  });
});
