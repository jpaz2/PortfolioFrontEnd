import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { NgForm } from '@angular/forms';
import { Estudio } from '../../model/Estudio';



@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  listaEducacion:any;
  
  public editEstudios!:Estudio;
  public deleteEstudios!:Estudio;


  constructor(private datosPortofolio:PortfolioService) { }

  ngOnInit(): void { 

    this.datosPortofolio.obtenerDatos().subscribe(data => {
      this.listaEducacion=data.estudios;
      this.editEstudios=this.listaEducacion[0];
      this.deleteEstudios=this.listaEducacion[0];
      
    })

  }

  public onAddEstudios(addForm: NgForm):void {
    
    
  }

  public onUpdateEstudio(estudio: Estudio):void {
     
    
  }

  public onDeleteEstudios(id: number):void {
    
  
}

  public onOpenModal(estudios: Estudio, mode: string): void{
  }

}
