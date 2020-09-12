import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../config';
import { Colaborador } from 'src/models/colaborador';





@Injectable({ providedIn: 'root' })
export class ColaboradorService {
    constructor(private http: HttpClient,
        ) { }

     

    getAll() {
        // const token = localStorage.getItem("token");
        // var reqHeader = new HttpHeaders({ 
        //     'Content-Type': 'application/json',
        //     'Authorization': 'Bearer ' + token
        //  });
        return this.http.get<any[]>(`${config.apiUrl}/api/colaboradores`);
    }


    
  register(colaborador:Colaborador) {
    return this.http.post<any>(`${config.apiUrl}/api/auth/register`, colaborador)
     
     
  }
}