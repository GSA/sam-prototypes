import { DataServicesModule } from './data-services.module';

describe('DataServicesModule', () => {
  let dataServicesModule: DataServicesModule;

  beforeEach(() => {
    dataServicesModule = new DataServicesModule();
  });

  it('should create an instance', () => {
    expect(dataServicesModule).toBeTruthy();
  });
});
