import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // Replace with your JSON server URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    // Replace this with your actual login API endpoint on the JSON server
    const loginEndpoint = `${this.apiUrl}/login`;

    const credentials = { username, password };

    return this.http.post(loginEndpoint, credentials).pipe(
      map((response: any) => {
        // Assuming your server returns a user object on successful login
        // Modify this logic based on your server's response
        if (response && response.user) {
          return response.user;
        } else {
          throw new Error('Invalid credentials or server response.');
        }
      }),
      catchError((error) => {
        // Handle login errors here
        return of({ error: 'Login failed. Please try again.' });
      })
    );
  }

  logout(): void {
    // Implement your logout logic here if needed
    // For example, clearing user data from local storage
  }
}
