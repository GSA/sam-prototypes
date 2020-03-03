import { TestBed } from '@angular/core/testing';

import { ExclusionFilterService } from './exclusion-filter.service';

describe('ExclusionFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExclusionFilterService = TestBed.get(ExclusionFilterService);
    expect(service).toBeTruthy();
  });
});
