import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  listaHabilidades:any;

  constructor(private datosPortofolio:PortfolioService) { }

  ngOnInit(): void {
   this.datosPortofolio.obtenerDatos().subscribe(data => {
      this.listaHabilidades=data.habilidades;
      
    })
  }
}
