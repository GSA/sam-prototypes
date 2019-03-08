import { SamBodyModule } from './sam-body.module';

describe('SamBodyModule', () => {
  let samBodyModule: SamBodyModule;

  beforeEach(() => {
    samBodyModule = new SamBodyModule();
  });

  it('should create an instance', () => {
    expect(samBodyModule).toBeTruthy();
  });
});
