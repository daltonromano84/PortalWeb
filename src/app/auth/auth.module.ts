import { NgModule } from '@angular/core';


import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { TokenInterceptor } from './token.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { ColaboradorGuard } from './guards/colaborador.guard';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [LoginComponent],
  providers: [
    AuthGuard,
    AuthService,
    ColaboradorGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  imports: [
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule ,
    CommonModule,
    RouterModule ,
    BrowserModule

     
   
  ]
})
export class AuthModule { }