import { TestBed } from '@angular/core/testing';

import { DisasterResponseFiltersService } from './disaster-response-filters.service';

describe('DisasterResponseFiltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisasterResponseFiltersService = TestBed.inject(DisasterResponseFiltersService);
    expect(service).toBeTruthy();
  });
});
