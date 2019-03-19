import { EntityServiceModule } from './entity-service.module';

describe('EntityServiceModule', () => {
  let entityServiceModule: EntityServiceModule;

  beforeEach(() => {
    entityServiceModule = new EntityServiceModule();
  });

  it('should create an instance', () => {
    expect(entityServiceModule).toBeTruthy();
  });
});
