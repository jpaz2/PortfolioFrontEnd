import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/Persona';
import { Estudio } from '../model/Estudio';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
 
  baseURL:string = "http://localhost:8080/ver/personas";
 
  persona:any;

  constructor(private http:HttpClient) { }
 
  public obtenerDatos(): Observable<Persona> {
    
    if (this.persona === undefined) {
      this.persona = this.http.get<Persona>(this.baseURL);
      console.log("paso por url obteniendo persona");
    } 
    console.log("devuelve persona");
    return this.persona}

 }



