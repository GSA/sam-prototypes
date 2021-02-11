import { TestBed } from '@angular/core/testing';

import { PscService } from './psc.service';

describe('PscService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PscService = TestBed.inject(PscService);
    expect(service).toBeTruthy();
  });
});
