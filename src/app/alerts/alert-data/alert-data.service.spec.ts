import { TestBed } from '@angular/core/testing';

import { AlertDataService } from './alert-data.service';

describe('AlertDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertDataService = TestBed.get(AlertDataService);
    expect(service).toBeTruthy();
  });
});
