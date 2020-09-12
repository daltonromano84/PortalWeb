import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  messageError:string="";
  error:boolean=false;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      Email: [''],
      Password: ['']
    });
  }

  get f() { return this.loginForm.controls; }

  login() {
    this.authService.login(
      {
        Email: this.f.Email.value,
        Password: this.f.Password.value
      }
    )
    .subscribe(success => {
      if (success) {
        this.router.navigate(['/colaboradores']);
      }
      else{
        this.error = true;
        this.messageError = "Erro ao acessar"

      }
    });
  }

}