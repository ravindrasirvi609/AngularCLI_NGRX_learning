import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl:"login.component.html",
  styles: [],
})
export class LoginComponent {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/users`);
  }
}
