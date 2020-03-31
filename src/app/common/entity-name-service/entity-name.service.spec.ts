import { TestBed } from '@angular/core/testing';

import { EntityNameService } from './entity-name.service';

describe('EntityNameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntityNameService = TestBed.get(EntityNameService);
    expect(service).toBeTruthy();
  });
});
