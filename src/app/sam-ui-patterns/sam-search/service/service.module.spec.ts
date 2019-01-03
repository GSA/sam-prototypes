import { ServiceModule } from './service.module';

describe('ServiceModule', () => {
  let serviceModule: ServiceModule;

  beforeEach(() => {
    serviceModule = new ServiceModule();
  });

  it('should create an instance', () => {
    expect(serviceModule).toBeTruthy();
  });
});
