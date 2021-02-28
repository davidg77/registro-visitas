import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase'
import User = firebase.User;
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 

  iconDetails: object[];
  constructor(
    private autservice : AuthService,
    private router : Router
  ) { }

  get user(): User{
    return this.autservice.user;
  }

  get isLoggedIn():boolean{
    return this.autservice.isLoggedIn;
  }

  async logout(): Promise<any> {
    console.log('click logout');
    this.autservice.logout().then(() => {
      this.autservice.setUser(undefined);
      this.router.navigate(['/']);
    });
  }

  alert(label: string): void {
    console.log('You clicked ', label);
    if(!this.isLoggedIn && label === 'Login'){
      this.router.navigate(['/login']);
      return;
    }

    if(this.isLoggedIn && label === 'Logout'){
      this.autservice.logout().then(() => {
        this.autservice.setUser(undefined);
        this.router.navigate(['/']);
      });
    }
  }

  ngOnInit(): void {
    this.iconDetails=[
      {
        label:'Login',
        source:'assets/icons/user.png'
      },
      {
        label:'Logout',
        source:'assets/icons/salir.svg'
      }
    ];    
  }  

}
