import { TestBed } from '@angular/core/testing';

import { RegisterDeactivateGuard } from './register-deactivate.guard';

describe('RegisterDeactivateGuard', () => {
  let guard: RegisterDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegisterDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
