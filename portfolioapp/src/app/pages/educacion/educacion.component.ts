import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '@app/model/Persona';
import { PortfolioService } from '@app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {


  listaEducacion: any;
  constructor(private portSvc: PortfolioService) { }

  ngOnInit(): void {
      this.portSvc.datosPersona$.subscribe(data => this.listaEducacion = data.estudios)
  }

}
