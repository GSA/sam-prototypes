import { TestBed } from '@angular/core/testing';

import { EntityinfoFilterService } from './entityinfo-filter.service';

describe('EntityinfoFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntityinfoFilterService = TestBed.get(EntityinfoFilterService);
    expect(service).toBeTruthy();
  });
});
