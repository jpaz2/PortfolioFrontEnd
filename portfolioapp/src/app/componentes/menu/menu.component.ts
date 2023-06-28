import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/seguridad/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  authService:any;

  constructor(private authSer: AuthService) { }

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
