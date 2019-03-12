import { OpportunitiesModule } from './opportunities.module';

describe('OpportunitiesModule', () => {
  let opportunitiesModule: OpportunitiesModule;

  beforeEach(() => {
    opportunitiesModule = new OpportunitiesModule();
  });

  it('should create an instance', () => {
    expect(opportunitiesModule).toBeTruthy();
  });
});
