import { TestBed } from '@angular/core/testing';

import { OpportunityFilterService } from './opportunity-filter.service';

describe('OpportunityFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpportunityFilterService = TestBed.get(OpportunityFilterService);
    expect(service).toBeTruthy();
  });
});
