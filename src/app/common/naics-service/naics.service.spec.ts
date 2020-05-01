import { TestBed } from '@angular/core/testing';

import { NaicsService } from './naics.service';

describe('NaicsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NaicsService = TestBed.get(NaicsService);
    expect(service).toBeTruthy();
  });
});
