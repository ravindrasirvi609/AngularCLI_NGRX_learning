import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private apiUrl = "http://localhost:3000/users";

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const loginEndpoint = `${this.apiUrl}`;
    const credentials = { username, password };
    return this.http.post(loginEndpoint, credentials).pipe(
      map((response: any) => {
        if (response && response.user) {
          return response.user;
        } else {
          throw alert("Invalid credentials or server response.");
        }
      }),
      catchError((error) => {
        return of({ error: "Login failed. Please try again." });
      })
    );
  }

  logout(): void {
    // Implement your logout logic here if needed
    // For example, clearing user data from local storage
  }
}
