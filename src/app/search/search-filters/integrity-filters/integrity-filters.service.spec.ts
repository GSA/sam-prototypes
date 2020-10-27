import { TestBed } from '@angular/core/testing';

import { IntegrityFiltersService } from './integrity-filters.service';

describe('IntegrityFiltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntegrityFiltersService = TestBed.get(IntegrityFiltersService);
    expect(service).toBeTruthy();
  });
});
