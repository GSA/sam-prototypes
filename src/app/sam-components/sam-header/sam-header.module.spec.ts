import { SamHeaderModule } from './sam-header.module';

describe('SamHeaderModule', () => {
  let samHeaderModule: SamHeaderModule;

  beforeEach(() => {
    samHeaderModule = new SamHeaderModule();
  });

  it('should create an instance', () => {
    expect(samHeaderModule).toBeTruthy();
  });
});
