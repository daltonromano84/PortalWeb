import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../services/colaboradores.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Colaborador } from 'src/models/colaborador';

@Component({
  selector: 'app-register-colaborador',
  templateUrl: './register-colaborador.component.html',
  styleUrls: ['./register-colaborador.component.css']
})
export class RegisterColaboradorComponent implements OnInit {
  
  colaboradorForm: FormGroup;
  private colaborador:Colaborador = <Colaborador>{};  




  constructor(private colaboradorService: ColaboradorService, 
              private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.colaboradorForm = this.formBuilder.group({
      Email: [''],
      Password: [''],
      ConfirmPassword: [''],
      IdEmpresa: [''],
      Matricula: [''],
      IdCargo: [''],
      Nome: [''],
    });
  }

  get f() { return this.colaboradorForm.controls; }

  register() {

    this.colaborador.Email =  this.f.Email.value,
    this.colaborador.Password =  this.f.Password.value,
    this.colaborador.ConfirmPassword =  this.f.ConfirmPassword.value,
    this.colaborador.IdEmpresa =  this.f.IdEmpresa.value,
    this.colaborador.Matricula =  this.f.Matricula.value,
    this.colaborador.IdCargo =  this.f.IdCargo.value,
    this.colaborador.Nome =  this.f.Nome.value,


    this.colaboradorService.register(this.colaborador)
    
    
    .subscribe(success => {
      if (success) {
        this.router.navigate(['/colaboradores']);
      }
      else{
       // this.error = true;
       // this.messageError = "Erro ao acessar"

      }
    });
  }

}
