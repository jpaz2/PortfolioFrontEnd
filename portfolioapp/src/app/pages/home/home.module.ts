import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AcercaDeComponent } from '../acerca-de/acerca-de.component';
import { ExperienciaComponent } from '../experiencia/experiencia.component';
import { HabilidadesComponent } from '../habilidades/habilidades.component';
import { ProyectosComponent } from '../proyectos/proyectos.component';
import { EducacionComponent } from '../educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    HomeComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    EducacionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgCircleProgressModule
  ]
})
export class HomeModule { }
