import { AssistanceHomeModule } from './assistance-home.module';

describe('AssistanceHomeModule', () => {
  let assistanceHomeModule: AssistanceHomeModule;

  beforeEach(() => {
    assistanceHomeModule = new AssistanceHomeModule();
  });

  it('should create an instance', () => {
    expect(assistanceHomeModule).toBeTruthy();
  });
});
