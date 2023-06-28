import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, throwError, BehaviorSubject, Observable } from 'rxjs';
import { Persona } from '../model/Persona';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<Persona> = new BehaviorSubject<Persona>({id:0, email:''});
  uri = 'http://localhost:8080';
  token:any;

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string){
    this.http.post(this.uri + '/authenticate', {email: email, password: password})
    .subscribe((resp: any) => {
      this.router.navigate(['inicio']);
      localStorage.setItem('auth_token', resp.token);
    })
  }

  logout(){
          localStorage.removeItem('auth_token');
  }

  public logIni(): boolean {
    return (localStorage.getItem('auth_token') != null);
  }

  private handleError(error:HttpErrorResponse){
    if (error.status === 0){
        console.error('Se ha producido un error: ', error.error);
    }
    else{
      console.error('Backend retorn el codigo de estado: ', error.status, error.error);
    }
    return throwError(()=> new Error('Algo fallo, Por favor intente nuevamente'));
  }
}
