import { TestBed } from '@angular/core/testing';

import { AssisganceFiltersService } from './assisgance-filters.service';

describe('AssisganceFiltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssisganceFiltersService = TestBed.inject(AssisganceFiltersService);
    expect(service).toBeTruthy();
  });
});
