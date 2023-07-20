
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { User, UserResponse } from '@app/shared/model/user.interface';
import { catchError,map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

const helper = new JwtHelperService;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private intFallido = false; 

  constructor(private http: HttpClient, private router: Router) {
    this.checkToken();
   }

  get isLogged(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  login(authData: User): Observable<UserResponse | void> {
    return this.http.post<UserResponse>(`${environment.API_URL}/auth/login`,authData)
    .pipe(
      map((res: UserResponse) => {
          console.log('Res->', res);
          if (res.token != null) {
              this.saveToken(res.token);
              this.loggedIn.next(true);
              return res
          } else {
            this.intFallido = true;
          }
          return;
          
        }),
        catchError((err) => this.handlerError(err))
    );
  }
  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    this.intFallido = false;
    //this.router.navigate(['/login'])
  }

  private checkToken(): void {
    const userToken = localStorage.getItem('token');
    const isExpired = helper.isTokenExpired(userToken);
    console.log('isExpired->', isExpired);
    if (isExpired) {
      this.logout();
    } else {
      this.loggedIn.next(true);
      
    }
  }

  private saveToken(token: string): void {
    localStorage.setItem('token', token);
  }
  
  private handlerError(err: any): Observable<never> {
    let errorMessage = 'Un error ha ocurrido';
    if (err) {
      errorMessage = `Error: code ${err.message}`;      
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  intentoFallido():boolean{
    return this.intFallido;
  }
  
}
