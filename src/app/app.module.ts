

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule, } from '@angular/platform-browser';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { CommonModule } from '@angular/common';
import { RegisterColaboradorComponent } from './register-colaborador/register-colaborador.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent, ColaboradoresComponent, RegisterColaboradorComponent
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    CommonModule,
    ReactiveFormsModule ,
   

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }