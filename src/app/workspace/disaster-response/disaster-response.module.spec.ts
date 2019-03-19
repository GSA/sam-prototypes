import { DisasterResponseModule } from './disaster-response.module';

describe('DisasterResponseModule', () => {
  let disasterResponseModule: DisasterResponseModule;

  beforeEach(() => {
    disasterResponseModule = new DisasterResponseModule();
  });

  it('should create an instance', () => {
    expect(disasterResponseModule).toBeTruthy();
  });
});
