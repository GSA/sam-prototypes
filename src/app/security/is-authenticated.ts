import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { AppService } from '../services/app-service/app.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticated implements CanActivate {
  constructor(private appService: AppService, private router: Router) {

  }
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(route.routeConfig.path == 'workspace') {
         if(!this.appService.signedIn) {
          this.appService.signIn();
         }
    } else if(route.routeConfig.path == 'signout') {
        if(this.appService.signedIn) {
          this.appService.signOut();
        }
    }
    return true;
  }
}