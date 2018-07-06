import { TestBed, async, inject } from '@angular/core/testing';

import { DefaultGuard } from './default.guard';
import {AuthService} from "../services/auth.service";

describe('DefaultGuard', () => {
  it('canActivateProfileGuard', () => {
    let authService = new AuthService(null);
    let defaultGuard = new DefaultGuard(authService, null);
    expect(defaultGuard.canActivate()).toBe(true);
  });
});
