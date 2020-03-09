import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedecinPageModule } from './medecin/medecin.module';
import { MenuPageModule } from './menu/menu.module';
import { DarkThemeService } from '../app/helpers/darktheme.service';
import { IonicStorageModule } from '@ionic/storage';
import { ThemeDetection } from '@ionic-native/theme-detection/ngx';
import { UserPersonalInfoPageModule } from './user-personal-info/user-personal-info.module';
import { SearchPageModule } from './search/search.module';
import { LoginPageModule } from './login/login.module';
import { NativePageTransitions} from '@ionic-native/native-page-transitions/ngx';
import { PatientPageModule } from './patient/patient.module';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';
import { CalendrierPageModule } from './calendrier/calendrier.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
     AppRoutingModule,
    CommonModule,
    MedecinPageModule,
    MenuPageModule,
    UserPersonalInfoPageModule,
    SearchPageModule,
    LoginPageModule,
    PatientPageModule,
    CalendrierPageModule,
  ],
  exports: [],
  providers: [
    SplashScreen,
    DarkThemeService,
    IonicStorageModule,
    ThemeDetection,
    Contacts,
    NativePageTransitions,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule {}
