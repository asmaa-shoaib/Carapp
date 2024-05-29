import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authLimitGuard } from './auth-limit.guard';

describe('authLimitGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authLimitGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
