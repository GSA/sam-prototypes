import { TestBed } from '@angular/core/testing';

import { DbaFilterService } from './dba-filter.service';

describe('DbaFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbaFilterService = TestBed.inject(DbaFilterService);
    expect(service).toBeTruthy();
  });
});
