import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { CookieModule } from '@ngx-toolkit/cookie';
import { TokenInterceptorService } from './services/token-interceptor/token-interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
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


//material angular



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    CookieModule.forRoot(),
     AppRoutingModule,
    CommonModule,
    MedecinPageModule,
    MenuPageModule,
    UserPersonalInfoPageModule,
    SearchPageModule,
    LoginPageModule,
    PatientPageModule,
    CalendrierPageModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [],
  providers: [
    SplashScreen,
    DarkThemeService,
    IonicStorageModule,
    ThemeDetection,
    Contacts,
    NativePageTransitions,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule {}
