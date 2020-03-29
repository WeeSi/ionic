import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { CalendrierPage } from './calendrier/calendrier.page';
import { AuthGuard } from './auth/auth.service';


const routes: Routes = [
  { path: '', component: LoginPage },
  { path: 'login', component: LoginPage },
  { path: 'calendrier', component: CalendrierPage },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'medecin', loadChildren: './medecin/medecin.module#MedecinPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'user-personal-info', loadChildren: './user-personal-info/user-personal-info.module#UserPersonalInfoPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'patient', loadChildren: './patient/patient.module#PatientPageModule' },
  {
    path: 'sigunp',
    loadChildren: () => import('./sigunp/sigunp.module').then( m => m.SigunpPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
