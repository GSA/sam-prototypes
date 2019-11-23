import { TestBed } from '@angular/core/testing';

import { NewsDataService } from './news-data.service';

describe('NewsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsDataService = TestBed.get(NewsDataService);
    expect(service).toBeTruthy();
  });
});
