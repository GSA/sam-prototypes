import { TestBed } from '@angular/core/testing';

import { DatabankService } from './databank.service';

describe('DatabankService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatabankService = TestBed.get(DatabankService);
    expect(service).toBeTruthy();
  });
});
