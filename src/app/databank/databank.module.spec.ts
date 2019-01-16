import { DatabankModule } from './databank.module';

describe('DatabankModule', () => {
  let databankModule: DatabankModule;

  beforeEach(() => {
    databankModule = new DatabankModule();
  });

  it('should create an instance', () => {
    expect(databankModule).toBeTruthy();
  });
});
