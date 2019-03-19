import { IntegrityModule } from './integrity.module';

describe('IntegrityModule', () => {
  let integrityModule: IntegrityModule;

  beforeEach(() => {
    integrityModule = new IntegrityModule();
  });

  it('should create an instance', () => {
    expect(integrityModule).toBeTruthy();
  });
});
