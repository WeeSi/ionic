import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
// import { NgCalendarModule } from 'ionic2-calendar';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';

import { IonicModule } from '@ionic/angular';

import { CalendrierPage } from './calendrier.page';

const routes: Routes = [
  {
    path: '',
    component: CalendrierPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // NgCalendarModule,
    SharedmoduleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CalendrierPage],
})
export class CalendrierPageModule {}
