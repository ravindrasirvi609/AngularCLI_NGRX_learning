import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "login.component.html",
  styles: [],
})
export class LoginComponent implements OnInit {
onSubmit() {
  console.log(this.loginForm.value);
  
}
  private baseUrl = "http://localhost:3000";
  loginForm!: FormGroup;

  constructor( private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      rememberMe: [false],
    });
  }
  // getUsers(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.baseUrl}/users`);
  // }
}
