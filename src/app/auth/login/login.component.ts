import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide: boolean = true;
  errorMessage: string;

  constructor(
    private fromBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fromBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    const user = new User(
      this.loginForm.value.username,
      this.loginForm.value.password
    );
    const resp = this.authService.login(user);
    if (resp == 'SUCCESS') {
      //navigate to employees page
      this.router.navigate(['employees/list-employees/table']);
    } else {
      //display the error message
      this.errorMessage = resp;
    }
  }
}
