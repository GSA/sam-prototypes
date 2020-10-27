import { TestBed } from '@angular/core/testing';

import { DatabankService } from './databank.service';

describe('DatabankService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatabankService = TestBed.inject(DatabankService);
    expect(service).toBeTruthy();
  });
});
