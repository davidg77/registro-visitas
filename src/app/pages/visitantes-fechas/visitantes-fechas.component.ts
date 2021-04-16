import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase'
import User = firebase.User;
import { VisitanteService } from 'src/app/services/visitante.service';
import { element } from 'protractor';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-visitantes-fechas',
  templateUrl: './visitantes-fechas.component.html',
  styleUrls: ['./visitantes-fechas.component.css']
})
export class VisitantesFechasComponent implements OnInit {
  visitantes:any[]=[];
  consultas : any[]=[];

  constructor(
    private authService : AuthService,
    private _visitanteService: VisitanteService
    ) 
    { }

  ngOnInit(): void {
    this.getVisitantes()
  }

  get user():User{
    return this.authService.user;
  }
  
  fechaI='';
  fechaF='';

  getVisitantes(){
    this._visitanteService.getVisitantes().subscribe(data => {
      this.visitantes = [];
      data.forEach((element:any) => {
        //console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data()["fechaCreacion"].toDate().getFullYear()
        //+ "-" + element.payload.doc.data()["fechaCreacion"].toDate().getMonth()
        //+ 1 + "-" + element.payload.doc.data()["fechaCreacion"].toDate().getDate());        
        this.visitantes.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      //console.log(this.visitantes)
    })
  }   

  mostrar(){    
    
    var fechaInicial = this.fechaI;
    var fechaFinal = this.fechaF;
    
    this.consultas = this.visitantes.filter(function (el) {
      var mes = el.fechaCreacion.toDate().getMonth() + 1;
      var dia =  el.fechaCreacion.toDate().getDate();
      if(mes < 10){
        mes = '0' + mes;
      }
      else{

      }  
      if(dia < 10){
        dia = '0' + dia;
      }
         return el.fechaCreacion.toDate().getFullYear() + "-" +  (mes) + "-"  + dia >= fechaInicial
         && el.fechaCreacion.toDate().getFullYear() + "-" +  (mes) + "-"  + dia <= fechaFinal;    
        
      });

      //console.log(this.consultas);    
  }



}
