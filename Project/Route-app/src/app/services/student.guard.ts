import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const studentGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const role = (localStorage.getItem('role') || '').toLowerCase();

  if (authService.isLoggedIn() && role === 'student') {
    return true;
  }

  alert('Access denied. Student role required.');
  router.navigate(['/login']);
  return false;
};
