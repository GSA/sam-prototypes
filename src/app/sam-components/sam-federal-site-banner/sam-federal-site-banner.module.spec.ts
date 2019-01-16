import { SamFederalSiteBannerModule } from './sam-federal-site-banner.module';

describe('SamFederalSiteBannerModule', () => {
  let samFederalSiteBannerModule: SamFederalSiteBannerModule;

  beforeEach(() => {
    samFederalSiteBannerModule = new SamFederalSiteBannerModule();
  });

  it('should create an instance', () => {
    expect(samFederalSiteBannerModule).toBeTruthy();
  });
});
