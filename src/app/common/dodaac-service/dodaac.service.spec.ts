import { TestBed } from '@angular/core/testing';

import { DodaacService } from './dodaac.service';

describe('DodaacService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DodaacService = TestBed.inject(DodaacService);
    expect(service).toBeTruthy();
  });
});
