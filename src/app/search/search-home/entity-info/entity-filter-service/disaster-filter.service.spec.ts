import { TestBed } from '@angular/core/testing';

import { DisasterFilterService } from './disaster-filter.service';

describe('DisasterFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisasterFilterService = TestBed.get(DisasterFilterService);
    expect(service).toBeTruthy();
  });
});
