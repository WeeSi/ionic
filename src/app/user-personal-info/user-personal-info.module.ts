import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserPersonalInfoPage } from './user-personal-info.page';

const routes: Routes = [
  {
    path: '',
    component: UserPersonalInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserPersonalInfoPage]
})
export class UserPersonalInfoPageModule {}
