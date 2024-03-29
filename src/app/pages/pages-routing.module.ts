import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../guards/auth.guard';

import { DashbordComponent } from './dashbord/dashbord.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
  { path: 'dashboard',
    component: PagesComponent,
    canActivate: [ AuthGuard ],
    children: [
      { path:'', component: DashbordComponent, data: { titulo: 'Dashboard'} },
      { path:'progress', component: ProgressComponent, data: { titulo: 'Progress'} },
      { path:'grafica1', component: Grafica1Component, data: { titulo: 'Grafica'} },
      { path:'settings', component: AccountSettingsComponent, data: { titulo: 'Settings'} },
      { path:'promises', component: PromisesComponent, data: { titulo: 'Promises'} },
      { path:'rxjs', component: RxjsComponent, data: { titulo: 'RxJs'} }
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule { }
