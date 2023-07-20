import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { PortfolioService } from '@app/servicios/portfolio.service';
import { Persona } from '@app/model/Persona';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private persona: Persona;
  constructor(public authSvc: AuthService, private datosPortofolio:PortfolioService) { }

  ngOnInit(): void {

    this.datosPortofolio.obtenerDatos().subscribe(data => {
      this.persona = data
    })

  }

}
