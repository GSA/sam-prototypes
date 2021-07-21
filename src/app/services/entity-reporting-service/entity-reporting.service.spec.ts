import { TestBed } from '@angular/core/testing';

import { EntityReportingService } from './entity-reporting.service';

describe('EntityReportingService', () => {
  let service: EntityReportingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityReportingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
