import { CustomerServiceModule } from './customer-service.module';

describe('CustomerServiceModule', () => {
  let customerServiceModule: CustomerServiceModule;

  beforeEach(() => {
    customerServiceModule = new CustomerServiceModule();
  });

  it('should create an instance', () => {
    expect(customerServiceModule).toBeTruthy();
  });
});
