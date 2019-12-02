import { TestBed } from '@angular/core/testing';

import { SystemAccountDataService } from './system-account-data.service';

describe('SystemAccountDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SystemAccountDataService = TestBed.get(SystemAccountDataService);
    expect(service).toBeTruthy();
  });
});
