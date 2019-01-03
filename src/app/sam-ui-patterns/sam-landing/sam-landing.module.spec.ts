import { SamLandingModule } from './sam-landing.module';

describe('SamLandingModule', () => {
  let samLandingModule: SamLandingModule;

  beforeEach(() => {
    samLandingModule = new SamLandingModule();
  });

  it('should create an instance', () => {
    expect(samLandingModule).toBeTruthy();
  });
});
