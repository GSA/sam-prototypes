import { NavigateModule } from './navigate.module';

describe('NavigateModule', () => {
  let navigateModule: NavigateModule;

  beforeEach(() => {
    navigateModule = new NavigateModule();
  });

  it('should create an instance', () => {
    expect(navigateModule).toBeTruthy();
  });
});
