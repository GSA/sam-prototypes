import { TestBed } from '@angular/core/testing';

import { WagesAamsService } from './wages-aams.service';

describe('WagesAamsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WagesAamsService = TestBed.get(WagesAamsService);
    expect(service).toBeTruthy();
  });
});
