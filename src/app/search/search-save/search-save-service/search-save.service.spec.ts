import { TestBed } from '@angular/core/testing';

import { SearchSaveService } from './search-save.service';

describe('SearchSaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchSaveService = TestBed.inject(SearchSaveService);
    expect(service).toBeTruthy();
  });
});
