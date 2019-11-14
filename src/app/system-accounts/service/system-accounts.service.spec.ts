import { TestBed } from '@angular/core/testing';

import { SystemAccountsService } from './system-accounts.service';

describe('SystemAccountsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SystemAccountsService = TestBed.get(SystemAccountsService);
    expect(service).toBeTruthy();
  });
});
