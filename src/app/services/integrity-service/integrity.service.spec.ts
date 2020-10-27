import { TestBed } from '@angular/core/testing';

import { IntegrityService } from './integrity.service';

describe('IntegrityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntegrityService = TestBed.get(IntegrityService);
    expect(service).toBeTruthy();
  });
});
