import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-session',
  templateUrl: './login-session.component.html',
  styleUrls: ['./login-session.component.css']
})
export class LoginSessionComponent implements OnInit {

  constructor(private router:Router
    ) { }

  ngOnInit(): void {
  }
  userInfo = {
    email:"",
    password:"",    
  } 
  variableTemporal = { }
  userInfoValidator = {
    email:false,
    password:false    
  }
  inicioSesion(){        
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
    if(this.userInfo.email !== "" && this.userInfo.password !== "" )
    {
      localStorage.setItem('userInfo',JSON.stringify(this.userInfo))

      this.router.navigate(['/dashboard'],{state:{data:{info:this.userInfo.email}}});

    }
    this.variableTemporal = localStorage.getItem('userInfo')    

    console.log("El boton esta funcionando")
    console.log('Esto es la información del usuario',this.userInfo)
    console.log('Esto es la validación del usuario',this.userInfoValidator)
  }

}
