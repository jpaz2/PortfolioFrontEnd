import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  {path: '',redirectTo:'/inicio',pathMatch:'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent}

];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
