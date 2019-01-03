import { EntitiesHomeModule } from './entities-home.module';

describe('EntitiesHomeModule', () => {
  let entitiesHomeModule: EntitiesHomeModule;

  beforeEach(() => {
    entitiesHomeModule = new EntitiesHomeModule();
  });

  it('should create an instance', () => {
    expect(entitiesHomeModule).toBeTruthy();
  });
});
