import { SamBrandingModule } from './sam-branding.module';

describe('SamBrandingModule', () => {
  let samBrandingModule: SamBrandingModule;

  beforeEach(() => {
    samBrandingModule = new SamBrandingModule();
  });

  it('should create an instance', () => {
    expect(samBrandingModule).toBeTruthy();
  });
});
