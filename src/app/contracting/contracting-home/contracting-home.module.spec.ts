import { ContractingHomeModule } from './contracting-home.module';

describe('ContractingHomeModule', () => {
  let contractingHomeModule: ContractingHomeModule;

  beforeEach(() => {
    contractingHomeModule = new ContractingHomeModule();
  });

  it('should create an instance', () => {
    expect(contractingHomeModule).toBeTruthy();
  });
});
