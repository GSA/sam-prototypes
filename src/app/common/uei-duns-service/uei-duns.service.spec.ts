import { TestBed } from '@angular/core/testing';

import { UeiDunsService } from './uei-duns.service';

describe('UeiDunsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UeiDunsService = TestBed.get(UeiDunsService);
    expect(service).toBeTruthy();
  });
});
