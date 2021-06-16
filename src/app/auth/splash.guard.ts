import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SplashGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let boo = localStorage.getItem("splash")
      console.log(boo)
      if(boo === "true"){
        return true;
      }
      else{
        this.router.navigate(['home'])
      }
  }
  
}
