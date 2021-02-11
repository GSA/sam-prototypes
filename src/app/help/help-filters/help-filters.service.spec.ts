import { TestBed } from '@angular/core/testing';

import { HelpFiltersService } from './help-filters.service';

describe('HelpFiltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelpFiltersService = TestBed.inject(HelpFiltersService);
    expect(service).toBeTruthy();
  });
});
