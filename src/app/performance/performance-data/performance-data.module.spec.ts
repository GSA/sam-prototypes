import { PerformanceDataModule } from './performance-data.module';

describe('PerformanceDataModule', () => {
  let performanceDataModule: PerformanceDataModule;

  beforeEach(() => {
    performanceDataModule = new PerformanceDataModule();
  });

  it('should create an instance', () => {
    expect(performanceDataModule).toBeTruthy();
  });
});
