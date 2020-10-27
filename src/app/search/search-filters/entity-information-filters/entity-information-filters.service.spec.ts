import { TestBed } from '@angular/core/testing';

import { EntityInformationFiltersService } from './entity-information-filters.service';

describe('EntityInformationFiltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntityInformationFiltersService = TestBed.get(EntityInformationFiltersService);
    expect(service).toBeTruthy();
  });
});
