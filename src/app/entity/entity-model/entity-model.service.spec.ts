import { TestBed } from '@angular/core/testing';

import { EntityModelService } from './entity-model.service';

describe('EntityModelService', () => {
  let service: EntityModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
