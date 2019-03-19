import { TestBed, inject } from '@angular/core/testing';

import { EntityServiceService } from './entity-service.service';

describe('EntityServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntityServiceService]
    });
  });

  it('should be created', inject([EntityServiceService], (service: EntityServiceService) => {
    expect(service).toBeTruthy();
  }));
});
