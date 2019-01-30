import { DatabankSearchModule } from './databank-search.module';

describe('DatabankSearchModule', () => {
  let databankSearchModule: DatabankSearchModule;

  beforeEach(() => {
    databankSearchModule = new DatabankSearchModule();
  });

  it('should create an instance', () => {
    expect(databankSearchModule).toBeTruthy();
  });
});
