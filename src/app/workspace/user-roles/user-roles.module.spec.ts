import { UserRolesModule } from './user-roles.module';

describe('UserRolesModule', () => {
  let userRolesModule: UserRolesModule;

  beforeEach(() => {
    userRolesModule = new UserRolesModule();
  });

  it('should create an instance', () => {
    expect(userRolesModule).toBeTruthy();
  });
});
