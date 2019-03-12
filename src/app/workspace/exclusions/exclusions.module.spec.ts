import { ExclusionsModule } from './exclusions.module';

describe('ExclusionsModule', () => {
  let exclusionsModule: ExclusionsModule;

  beforeEach(() => {
    exclusionsModule = new ExclusionsModule();
  });

  it('should create an instance', () => {
    expect(exclusionsModule).toBeTruthy();
  });
});
