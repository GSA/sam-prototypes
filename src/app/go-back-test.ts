import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { AppService } from './services/app-service/app.service';

@Injectable({
  providedIn: 'root'
})
export class GoBackTest implements CanActivate {
  constructor(private appService: AppService, private location: Location) {

  }
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.appService.backButtonTest) {
        if(this.appService.backButtonTest(route)) {
            return true;
        }
        this.location.back();
    } else {
        return true;
    }
  }
}