import { DatabankReportsModule } from './databank-reports.module';

describe('DatabankReportsModule', () => {
  let databankReportsModule: DatabankReportsModule;

  beforeEach(() => {
    databankReportsModule = new DatabankReportsModule();
  });

  it('should create an instance', () => {
    expect(databankReportsModule).toBeTruthy();
  });
});
