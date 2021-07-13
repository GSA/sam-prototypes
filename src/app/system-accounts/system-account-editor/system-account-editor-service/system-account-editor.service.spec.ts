import { TestBed } from '@angular/core/testing';

import { SystemAccountEditorService } from './system-account-editor.service';

describe('SystemAccountEditorService', () => {
  let service: SystemAccountEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemAccountEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
