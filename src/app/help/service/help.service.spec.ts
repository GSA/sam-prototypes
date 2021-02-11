import { TestBed } from '@angular/core/testing';

import { HelpService } from './help.service';

describe('HelpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelpService = TestBed.inject(HelpService);
    expect(service).toBeTruthy();
  });
});
