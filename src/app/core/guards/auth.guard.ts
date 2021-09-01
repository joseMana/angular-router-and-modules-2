import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild, Route, UrlSegment, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

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
        if (isLoggedIn && userInfoParsed.role === 'admin') {
          return true;
        }
      }      
      
      // this.router.navigate(['login']);
      // return false;

      return this.router.createUrlTree(['login']);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log('Activated Child');

      const isLoggedIn = localStorage.getItem('isAuthenticated');
      const userInfo = localStorage.getItem('userInfo');

      if (userInfo) {
        const userInfoParsed = JSON.parse(userInfo);
        if (isLoggedIn && userInfoParsed.role === 'admin') {
          return true;
        }
      }      
      
      // this.router.navigate(['login']);
      // return false;

      return this.router.createUrlTree(['login']);
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('Loaded');

      const isLoggedIn = localStorage.getItem('isAuthenticated');
      const userInfo = localStorage.getItem('userInfo');

      if (userInfo) {
        const userInfoParsed = JSON.parse(userInfo);
        if (isLoggedIn && userInfoParsed.role === 'admin') {
          return true;
        }
      }      
      
      // this.router.navigate(['login']);
      // return false;

      return this.router.createUrlTree(['login']);
  }
  
}
