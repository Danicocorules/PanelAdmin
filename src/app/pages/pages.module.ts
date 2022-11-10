import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module'

import { DashbordComponent } from './dashbord/dashbord.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';



@NgModule({
  declarations: [
    DashbordComponent,
    Grafica1Component,
    PagesComponent,
    ProgressComponent,
    AccountSettingsComponent,
    PromisesComponent,
    RxjsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    AppRoutingModule,
    ComponentsModule
  ],
  exports: [
    DashbordComponent,
    Grafica1Component,
    PagesComponent,
    ProgressComponent,
    AccountSettingsComponent,

  ]
})
export class PagesModule { }
