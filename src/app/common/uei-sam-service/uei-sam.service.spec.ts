import { TestBed } from '@angular/core/testing';

import { UeiSamService } from './uei-sam.service';

describe('UeiSamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UeiSamService = TestBed.get(UeiSamService);
    expect(service).toBeTruthy();
  });
});
