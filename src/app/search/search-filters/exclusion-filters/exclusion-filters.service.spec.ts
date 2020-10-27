import { TestBed } from '@angular/core/testing';

import { ExclusionFiltersService } from './exclusion-filters.service';

describe('ExclusionFiltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExclusionFiltersService = TestBed.inject(ExclusionFiltersService);
    expect(service).toBeTruthy();
  });
});
