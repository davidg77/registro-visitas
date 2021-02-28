import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component'
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    pathMatch:'full'
  },  
  {
    path: 'login',
    component: LoginComponent
    /* implementación de ruteo child 
      children:[
      {
        path: 'login2',
        component: LoginComponent,
      }
    ] */
    
  },  
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
