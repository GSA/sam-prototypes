import { TestBed, inject } from '@angular/core/testing';

import { SamModelService } from './sam-model.service';

describe('SamModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SamModelService]
    });
  });

  it('should be created', inject([SamModelService], (service: SamModelService) => {
    expect(service).toBeTruthy();
  }));
});
