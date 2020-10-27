import { TestBed } from '@angular/core/testing';

import { UeiSamService } from './uei-sam.service';

describe('UeiSamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UeiSamService = TestBed.inject(UeiSamService);
    expect(service).toBeTruthy();
  });
});
