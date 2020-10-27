import { TestBed } from '@angular/core/testing';

import { WageFiltersService } from './wage-filters.service';

describe('WageFiltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WageFiltersService = TestBed.get(WageFiltersService);
    expect(service).toBeTruthy();
  });
});
