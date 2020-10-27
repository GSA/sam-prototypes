import { TestBed } from '@angular/core/testing';

import { AwardIdvTypeService } from './award-idv-type.service';

describe('AwardIdvTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AwardIdvTypeService = TestBed.inject(AwardIdvTypeService);
    expect(service).toBeTruthy();
  });
});
