import { TestBed } from '@angular/core/testing';

import { HierarchyService } from './hierarchy.service';

describe('HierarchyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HierarchyService = TestBed.inject(HierarchyService);
    expect(service).toBeTruthy();
  });
});
