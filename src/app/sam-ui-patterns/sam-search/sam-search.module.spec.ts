import { SamSearchModule } from './sam-search.module';

describe('SamSearchModule', () => {
  let samSearchModule: SamSearchModule;

  beforeEach(() => {
    samSearchModule = new SamSearchModule();
  });

  it('should create an instance', () => {
    expect(samSearchModule).toBeTruthy();
  });
});
