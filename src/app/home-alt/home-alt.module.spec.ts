import { HomeAltModule } from './home-alt.module';

describe('HomeAltModule', () => {
  let homeAltModule: HomeAltModule;

  beforeEach(() => {
    homeAltModule = new HomeAltModule();
  });

  it('should create an instance', () => {
    expect(homeAltModule).toBeTruthy();
  });
});
