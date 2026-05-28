import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient){ }

  getUsers(): Observable<any>{
    return this.http.get(this.apiUrl).pipe(
      catchError((error) => {
        console.error('API Error:',error);

        return throwError(() => error);
      })
    )
  }
}
