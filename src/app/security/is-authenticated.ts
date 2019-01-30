import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { Observable } from "rxjs/Rx"
import { SamModelService } from '../model/sam-model.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticated implements CanActivate {
  constructor(private model: SamModelService, private router: Router) {

  }
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(!this.model.isSignedIn) {
    	this.router.navigate(['/']);
    }
    return this.model.isSignedIn;
  }
}