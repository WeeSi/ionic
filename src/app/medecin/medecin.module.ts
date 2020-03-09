import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MedecinPage } from './medecin.page';
import { ContentDrawerComponent } from '../content-drawer/content-drawer.component';


const routes: Routes = [
  {
    path: '',
    component: MedecinPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MedecinPage,ContentDrawerComponent]
})
export class MedecinPageModule {
 
}
