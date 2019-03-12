import { ContractdataModule } from './contractdata.module';

describe('ContractdataModule', () => {
  let contractdataModule: ContractdataModule;

  beforeEach(() => {
    contractdataModule = new ContractdataModule();
  });

  it('should create an instance', () => {
    expect(contractdataModule).toBeTruthy();
  });
});
