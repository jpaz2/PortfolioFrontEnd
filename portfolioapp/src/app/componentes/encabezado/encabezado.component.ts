import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../servicios/portfolio.service';
import { AuthService } from '../../seguridad/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  authService:any;

  constructor(private datosPortofolio:PortfolioService, private authSer: AuthService) { }

  ngOnInit(): void {
   this.authService=this.authSer;
  }

  logout(){
    this.authService.logout;
  }

  logIni(){
    this.authService.logIni;
  }
}
