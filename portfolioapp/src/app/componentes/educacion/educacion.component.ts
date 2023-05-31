import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  listaEducacion:any;

  constructor(private datosPortofolio:PortfolioService) { }

  ngOnInit(): void { 

    this.datosPortofolio.obtenerDatos().subscribe(data => {
      this.listaEducacion=data.estudios;
      
    })

  }
}
