import { SamListModule } from './sam-list.module';

describe('SamListModule', () => {
  let samListModule: SamListModule;

  beforeEach(() => {
    samListModule = new SamListModule();
  });

  it('should create an instance', () => {
    expect(samListModule).toBeTruthy();
  });
});
