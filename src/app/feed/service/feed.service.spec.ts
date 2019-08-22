import { TestBed } from '@angular/core/testing';

import { FeedServiceService } from './feed-service.service';

describe('FeedServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeedServiceService = TestBed.get(FeedServiceService);
    expect(service).toBeTruthy();
  });
});
