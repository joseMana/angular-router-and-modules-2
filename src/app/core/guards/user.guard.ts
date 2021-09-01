import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor (
    private router: Router
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('Activated');

      const isLoggedIn = localStorage.getItem('isAuthenticated');
      const userInfo = localStorage.getItem('userInfo');

      if (userInfo) {
        const userInfoParsed = JSON.parse(userInfo);
        if (isLoggedIn && userInfoParsed.role === 'user') {
          return true;
        }
      }      
      
      this.router.navigate(['login']);
      return false;
  }
  
}
