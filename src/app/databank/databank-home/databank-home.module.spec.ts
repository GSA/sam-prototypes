import { DatabankHomeModule } from './databank-home.module';

describe('DatabankHomeModule', () => {
  let databankHomeModule: DatabankHomeModule;

  beforeEach(() => {
    databankHomeModule = new DatabankHomeModule();
  });

  it('should create an instance', () => {
    expect(databankHomeModule).toBeTruthy();
  });
});
