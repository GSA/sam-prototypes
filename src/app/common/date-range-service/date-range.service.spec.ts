import { TestBed } from '@angular/core/testing';

import { DateRangeService } from './date-range.service';

describe('DateRangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateRangeService = TestBed.get(DateRangeService);
    expect(service).toBeTruthy();
  });
});
