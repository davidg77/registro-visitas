import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component'
import { LoginSessionComponent } from './pages/login-session/login-session.component'
import {DashboardComponent} from './pages/dashboard/dashboard.component'

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    pathMatch:'full'
  },
  {
    path:'register',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginSessionComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
