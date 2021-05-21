import { TestBed } from '@angular/core/testing';

import { EntityRegistrationEditorService } from './entity-registration-editor.service';

describe('EntityRegistrationEditorService', () => {
  let service: EntityRegistrationEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityRegistrationEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
