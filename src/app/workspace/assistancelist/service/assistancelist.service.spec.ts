import { TestBed } from '@angular/core/testing';

import { AssistancelistService } from './assistancelist.service';

describe('AssistancelistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssistancelistService = TestBed.inject(AssistancelistService);
    expect(service).toBeTruthy();
  });
});
