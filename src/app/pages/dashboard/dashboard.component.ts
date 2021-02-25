import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {
    
   }

  

  ngOnInit(): void {
    var a = history.pushState(null,'any',"dashboard");
    
    
  }
  userInfo = {
    email:"",
    password:"",    
  }

  bienvenida(){
    localStorage.setItem('userInfo',JSON.stringify(this.userInfo))
    
  }

}
