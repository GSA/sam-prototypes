import { TestBed, inject } from '@angular/core/testing';

import { SamSearchService } from './sam-search.service';

describe('SamSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SamSearchService]
    });
  });

  it('should be created', inject([SamSearchService], (service: SamSearchService) => {
    expect(service).toBeTruthy();
  }));
});
