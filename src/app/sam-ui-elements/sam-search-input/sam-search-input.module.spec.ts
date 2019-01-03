import { SamSearchInputModule } from './sam-search-input.module';

describe('SamSearchInputModule', () => {
  let samSearchInputModule: SamSearchInputModule;

  beforeEach(() => {
    samSearchInputModule = new SamSearchInputModule();
  });

  it('should create an instance', () => {
    expect(samSearchInputModule).toBeTruthy();
  });
});
