import { Injectable } from '@angular/core';
//import { User } from '../models/user.model';
import {AngularFireAuth}  from '@Angular/fire/auth'
import firebase from 'firebase'
import { promise } from 'protractor';
import User = firebase.User;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user?: User;

  constructor(
    private fireauth: AngularFireAuth
  ) {
    console.log('call constructor')
    //Validar si un usuario inicio sesión
    this.fireauth.authState.subscribe((user) =>{
      if(user){
        this.setUser(user)

      }

    })
   }

   setUser(user:User){
     this.user = user;
   }

   get isLoggedIn(): boolean{
     return (this.user !== undefined);
   }

   //la promesa de tipo any se dejo de ejemplo per se debe validar los modelos que retorna firebase
   //en los servicios no es recomendable ejecutar la logica se debe retornar la promesa o el observable
   login(email:string, password:string): Promise<any>{
     return this.fireauth.signInWithEmailAndPassword(email, password);
   }

   logout():Promise<any>{
     return  this.fireauth.signOut();
   }
}
