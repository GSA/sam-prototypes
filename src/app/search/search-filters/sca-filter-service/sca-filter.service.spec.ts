import { TestBed } from '@angular/core/testing';

import { ScaFilterService } from './sca-filter.service';

describe('ScaFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScaFilterService = TestBed.get(ScaFilterService);
    expect(service).toBeTruthy();
  });
});
