import { TestBed } from '@angular/core/testing';

import { WageFilterService } from './wage-filter.service';

describe('WageFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WageFilterService = TestBed.get(WageFilterService);
    expect(service).toBeTruthy();
  });
});
