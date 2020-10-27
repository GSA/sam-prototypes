import { TestBed } from '@angular/core/testing';

import { CageNcageService } from './cage-ncage.service';

describe('CageNcageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CageNcageService = TestBed.inject(CageNcageService);
    expect(service).toBeTruthy();
  });
});
