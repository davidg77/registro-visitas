import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import {ListVisitantesComponent} from './pages/list-visitantes/list-visitantes.component'
import {CreateVisitantesComponent} from './pages/create-visitantes/create-visitantes.component'
import{VisitantesFechasComponent} from './pages/visitantes-fechas/visitantes-fechas.component'

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    pathMatch:'full'
  },  
  {
    path: 'login',
    component: LoginComponent    
  },  
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'listadovisita',
    component:ListVisitantesComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'crear',
    component:CreateVisitantesComponent
  },
  {
    path:'consulta',
    component:VisitantesFechasComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
