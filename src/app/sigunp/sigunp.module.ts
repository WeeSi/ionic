import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigunpPageRoutingModule } from './sigunp-routing.module';

import { SigunpPage } from './sigunp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SigunpPageRoutingModule
  ],
  declarations: [SigunpPage]
})
export class SigunpPageModule {}
