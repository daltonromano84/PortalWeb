import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/guards/auth.guard';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { LoginComponent } from './auth/login/login.component';
import { ColaboradorGuard } from './auth/guards/colaborador.guard';
import { RegisterColaboradorComponent } from './register-colaborador/register-colaborador.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterColaboradorComponent
   // canActivate: [AuthGuard]
  },
  {
    path: 'colaboradores',
    component: ColaboradoresComponent,
    canActivate: [ColaboradorGuard],
    canLoad: [ColaboradorGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
