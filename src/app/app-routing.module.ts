import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth/auth-guard.guard';
import { LoginGuard } from './auth/login.guard';
import { SplashGuard } from './auth/splash.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule),
    canActivate: [SplashGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./regi/regi.module').then( m => m.RegiPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'register/:mob',
    loadChildren: () => import('./regi/regi.module').then(m => m.RegiPageModule),
    canActivate:[LoginGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
