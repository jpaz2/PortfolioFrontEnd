import { Component, OnDestroy, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  hide = true;
  private isVaidEmail = /\S+@\S+\.\S+/;
  private subscription: Subscription = new Subscription();

  loginForm = this.fb.group({
    username: ['',[Validators.required, Validators.pattern(this.isVaidEmail)]],
    password: ['',[Validators.required, Validators.minLength(8)]],
  });


  constructor( 
    
    private authSvc: AuthService, 
    private fb: FormBuilder,
    private router: Router
    ) { }



  ngOnInit(): void {
   // const userData = {
   //   username: 'j@g.com',
   //   password: '12312312',
   // };
   // this.authSvc.login(userData).subscribe((res)=> console.log(res));
   // console.log('una mierda en ngOnInit',userData);
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

  onLogin(): void {

    if (this.loginForm.invalid) {
      return;      
    }

    const formValue = this.loginForm.value;
    console.log('una mierda',formValue);
    this.subscription.add(
    this.authSvc.login(formValue).subscribe(
      (res) => { 
        if (res) { this.router.navigate(['']);}
      }))
  }

  getErrorMessage(field: string): string{
    let message = "";
    //if (this.loginForm.get(field)?.errors.required) {
    //  message = 'Debe ingresar un valor';
    //} else
     if (this.loginForm.get(field)?.hasError('pattern')){
      message = 'Email no es valido';
    } else if (this.loginForm.get(field)?.hasError('minLength')){
      message = 'La cantidad mínima de caracteres es de 8';
    }
    return message;
  }

  isValidField(field: string): boolean{
    return (
      (this.loginForm.get(field)?.touched || this.loginForm.get(field)?.dirty) &&
      !this.loginForm.get(field)?.valid
    ) || false;
  }

  intentoFallido():boolean{
    return this.authSvc.intentoFallido();
  }

}
