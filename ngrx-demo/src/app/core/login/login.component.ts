import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../state/auth.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "login.component.html",
  styles: [],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ){}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      rememberMe: [false],
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);

    this.authService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe({
        next(response) {
          if (response.user) {
           // this.router.navigate(["/counter"]);
          }
        },
      });
  }
}
