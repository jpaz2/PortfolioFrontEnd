import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  listaProyectos:any;

  constructor(private datosPortofolio:PortfolioService) { }

  ngOnInit(): void {
   this.datosPortofolio.obtenerDatos().subscribe(data => {
      this.listaProyectos=data.proyectos;
      
    })
  }

}
