import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const role = (localStorage.getItem('role') || '').toLowerCase();

  if (authService.isLoggedIn() && role === 'admin') {
    return true;
  }

  alert('Access denied. Admin role required.');
  router.navigate(['/login']);
  return false;
};
