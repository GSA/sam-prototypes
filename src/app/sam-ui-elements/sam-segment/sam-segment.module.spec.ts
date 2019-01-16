import { SamSegmentModule } from './sam-segment.module';

describe('SamSegmentModule', () => {
  let samSegmentModule: SamSegmentModule;

  beforeEach(() => {
    samSegmentModule = new SamSegmentModule();
  });

  it('should create an instance', () => {
    expect(samSegmentModule).toBeTruthy();
  });
});
