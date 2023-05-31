import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  listaExperiencia:any;

  constructor(private datosPortofolio:PortfolioService) { }

  ngOnInit(): void {
   this.datosPortofolio.obtenerDatos().subscribe(data => {
      this.listaExperiencia=data.experiencias;
    })
  }
}
