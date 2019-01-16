import { SamCardModule } from './sam-card.module';

describe('SamCardModule', () => {
  let samCardModule: SamCardModule;

  beforeEach(() => {
    samCardModule = new SamCardModule();
  });

  it('should create an instance', () => {
    expect(samCardModule).toBeTruthy();
  });
});
