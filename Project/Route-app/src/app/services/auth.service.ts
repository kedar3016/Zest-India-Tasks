import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:7065/api/Auth';
  // Session duration: 10 minutes (600,000 milliseconds)
  private readonly SESSION_TIMEOUT = 10 * 60 * 1000;
  private sessionTimer: any = null;

  constructor(private http: HttpClient, private router: Router) {
    this.startSessionTimer();
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  saveSession(response: any): void {
    localStorage.setItem('token', response.token);
    localStorage.setItem('role', response.role);
    localStorage.setItem('userId', response.id);
    localStorage.setItem('loginTimestamp', Date.now().toString());
    this.startSessionTimer();
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;
    return !this.isSessionExpired();
  }

  isSessionExpired(): boolean {
    const loginTimestamp = localStorage.getItem('loginTimestamp');
    if (!loginTimestamp) return true;

    const elapsed = Date.now() - parseInt(loginTimestamp, 10);
    return elapsed > this.SESSION_TIMEOUT;
  }

  logout(isAutomatic: boolean = false): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
    localStorage.removeItem('loginTimestamp');
    
    if (this.sessionTimer) {
      clearInterval(this.sessionTimer);
      this.sessionTimer = null;
    }

    if (isAutomatic) {
      alert('Session expired. Please log in again.');
    } else {
      alert('Logged out successfully.');
    }
    
    this.router.navigate(['/login']);
  }

  startSessionTimer(): void {
    if (this.sessionTimer) {
      clearInterval(this.sessionTimer);
      this.sessionTimer = null;
    }

    // Check immediately on startup/restart
    if (localStorage.getItem('token') && this.isSessionExpired()) {
      this.logout(true);
      return;
    }

    this.sessionTimer = setInterval(() => {
      if (localStorage.getItem('token')) {
        if (this.isSessionExpired()) {
          this.logout(true);
        }
      } else {
        if (this.sessionTimer) {
          clearInterval(this.sessionTimer);
          this.sessionTimer = null;
        }
      }
    }, 5000); // Check session validity every 5 seconds
  }
}