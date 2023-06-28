import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import { AuthService } from '../../seguridad/auth.service';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/model/Persona';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError: string = "";
  form: FormGroup;
  public email = "";
  public password = "";

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router){ 
    ///Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      password:['12312312',[Validators.required, Validators.minLength(8)]],
      email:['j@g.com', [Validators.required, Validators.email]],
   })
  }

//  Login(){
    
    // cito y dice: "El servicio authService.login ya redirecciona en el caso de inicio de sesion positivo"
  //  this.authService.login(this.email, this.password);
//  }



  ngOnInit() {}

  get Password(){
    return this.form.get("password");
  }
 
  get Mail(){
   return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false
  }
 

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
     this.authService.login(this.email,this.password);
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
 
  }


}