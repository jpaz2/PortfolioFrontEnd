import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '@app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  listaProyectos: any;
  constructor(private portSvc: PortfolioService) { }

  ngOnInit(): void {
      this.portSvc.datosPersona$.subscribe(data => this.listaProyectos = data.proyectos)
  }
}
