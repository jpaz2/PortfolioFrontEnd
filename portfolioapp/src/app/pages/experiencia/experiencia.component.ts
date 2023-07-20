import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '@app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  listaExperiencia: any;
  constructor(private portSvc: PortfolioService) { }

  ngOnInit(): void {
      this.portSvc.datosPersona$.subscribe(data => this.listaExperiencia = data.experiencias)
  }

}
