import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../state/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "login.component.html",
  styles: [],
})
export class LoginComponent implements OnInit {
  private baseUrl = "http://localhost:3000";
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

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

  onSubmit() {
    console.log(this.loginForm.value);

    this.authService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe({
        next(response) {
     //     this.router.navigate(['/counter']);

          console.log(response);
          if (response.status === 200) {
            alert("success message sent");
          }
        },
      });
  }
}
