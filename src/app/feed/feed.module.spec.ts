import { FeedModule } from './feed.module';

describe('FeedModule', () => {
  let feedModule: FeedModule;

  beforeEach(() => {
    feedModule = new FeedModule();
  });

  it('should create an instance', () => {
    expect(feedModule).toBeTruthy();
  });
});
