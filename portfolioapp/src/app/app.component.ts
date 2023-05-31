import { Component } from '@angular/core';
import { PortfolioService } from './servicios/portfolio.service';
import { Persona } from './model/Persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PortfolioService]
})
export class AppComponent {
  title = 'portfolioapp';



  constructor(private datosPortofolio:PortfolioService) { }

  ngOnInit(): void {}

}
