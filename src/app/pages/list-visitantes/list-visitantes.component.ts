import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase'
import User = firebase.User;
import { VisitanteService } from 'src/app/services/visitante.service';


@Component({
  selector: 'app-list-visitantes',
  templateUrl: './list-visitantes.component.html',
  styleUrls: ['./list-visitantes.component.css']
})
export class ListVisitantesComponent implements OnInit {
  visitantes:any[]=[];

  constructor(    
    private authService : AuthService,
    private _visitanteService: VisitanteService

  ) {}

  ngOnInit(): void {
    this.getVisitantes()
  }

  get user():User{
    return this.authService.user;
  }

  getVisitantes(){
    this._visitanteService.getVisitantes().subscribe(data => {
      this.visitantes = [];
      data.forEach((element:any) => {
        console.log(element.payload.doc.id);
        console.log(element.payload.doc.data());
        this.visitantes.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      //console.log(this.visitantes)
    })
  }

 

}
