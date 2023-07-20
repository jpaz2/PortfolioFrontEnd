import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '@app/servicios/portfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  listaHabilidades: any;
  constructor(private portSvc: PortfolioService) { }

  ngOnInit(): void {
      this.portSvc.datosPersona$.subscribe(data => this.listaHabilidades = data.habilidades)
  }

}
