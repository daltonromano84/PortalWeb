import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';
import { ColaboradorService } from '../services/colaboradores.service';
import { first } from 'rxjs/operators';
import { Colaborador } from 'src/models/colaborador';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  error:boolean = true;

  colaboradores: any[] = [];
  constructor(private authService: AuthService,private colaboradorService: ColaboradorService,  private router: Router) { }


  ngOnInit() {

    this.getAllColaboradores();
     
    }

    getAllColaboradores(){

      this.colaboradorService.getAll().subscribe(colaboradores => {
        this.colaboradores = colaboradores;
        console.log(this.colaboradores);
        console.log(this.colaboradores[0].nome);
    });

    }

  logout() {
    this.authService.logout(  
    )

        this.router.navigate(['/login']);
    
  }

}


