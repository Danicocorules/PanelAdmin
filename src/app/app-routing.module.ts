import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages/pages.component';

const routes: Routes = [
  { path: '',
    component: PagesComponent,
    children: [
      { path:'dashboard', component: DashbordComponent },
      { path:'progress', component: ProgressComponent },
      { path:'', redirectTo: '/dashboard', pathMatch: "full" },
    ]
  },


  { path:'register', component: RegisterComponent },
  { path:'login', component: LoginComponent },
  { path:'grafica1', component: Grafica1Component },

  { path:'**', component: NopagefoundComponent },

]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
