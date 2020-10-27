import { TestBed } from '@angular/core/testing';

import { EntityRegistrationService } from './entity-registration.service';

describe('EntityRegistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntityRegistrationService = TestBed.get(EntityRegistrationService);
    expect(service).toBeTruthy();
  });
});
