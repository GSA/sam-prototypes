import { EntitiesServiceModule } from './entities-service.module';

describe('EntitiesServiceModule', () => {
  let entitiesServiceModule: EntitiesServiceModule;

  beforeEach(() => {
    entitiesServiceModule = new EntitiesServiceModule();
  });

  it('should create an instance', () => {
    expect(entitiesServiceModule).toBeTruthy();
  });
});
