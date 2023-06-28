import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; 
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './componentes/inicio/inicio.component';



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    MenuComponent,
    CarouselComponent,
    AcercaDeComponent,
    EducacionComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ContactoComponent,
    PiePaginaComponent,
    LoginComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
