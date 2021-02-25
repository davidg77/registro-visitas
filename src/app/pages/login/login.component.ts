import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }  
  userInfo = {
    email:"",
    password:"",
    userName:""
  } 
  
  variableTemporal = { }
  userInfoValidator = {
    email:false,
    password:false,
    userName:false
  }
  registrar(){        
    //Validación email
    if(this.userInfo.email === "")  {
      console.log("Email esta vacio")
      this.userInfoValidator.email = true
    }
    else
    {
      this.userInfoValidator.email = false
    }
    //Validación contraseña
    if(this.userInfo.password === "")  {
      console.log("Password esta vacio")
      this.userInfoValidator.password = true
    }
    else
    {
      this.userInfoValidator.password = false
    }
    //Validación usuario
    if(this.userInfo.userName === "")  {
      console.log("Usuario esta vacio")
      this.userInfoValidator.userName = true
    }
    else
    {
      this.userInfoValidator.userName = false
    }
    if(this.userInfo.userName !== "" && this.userInfo.email !== "" && this.userInfo.password !== "" ){
      localStorage.setItem('userInfo',JSON.stringify(this.userInfo))
      this.router.navigate(['/'])

    }
    this.variableTemporal = localStorage.getItem('userInfo')

    console.log("El boton esta funcionando")
    console.log('Esto es la información del usuario',this.userInfo)
    console.log('Esto es la validación del usuario',this.userInfoValidator)
  }

}

/*
  ngIf
  ngFor
*/
