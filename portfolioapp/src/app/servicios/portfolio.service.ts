import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Persona } from '../model/Persona';
import { Estudio } from '../model/Estudio';

const initPersona: Persona = {
  id: 0
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
 
  baseURL:string = "http://localhost:8080/ver/personas";
 
  private persona$ = new BehaviorSubject<Persona>(initPersona)

  constructor(private http:HttpClient) { }
 
  public obtenerDatos(): Observable<Persona> {
    
   // if (this.persona$ === undefined) {
      this.http.get<Persona>(this.baseURL).subscribe(
        data => this.setDatosPersona(data)
      )
      
      
      console.log("paso por url obteniendo persona");
   // } 
    console.log("devuelve persona");
    return this.persona$}

    get datosPersona$(): Observable<Persona>{
      return this.persona$.asObservable();
    }

    setDatosPersona (datos: Persona): void{
      this.persona$.next(datos);
    }
 }



