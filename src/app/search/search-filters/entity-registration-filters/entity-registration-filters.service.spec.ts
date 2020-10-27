import { TestBed } from '@angular/core/testing';

import { EntityRegistrationFiltersService } from './entity-registration-filters.service';

describe('EntityRegistrationFiltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntityRegistrationFiltersService = TestBed.inject(EntityRegistrationFiltersService);
    expect(service).toBeTruthy();
  });
});
