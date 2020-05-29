import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { SamModelService } from '../model/sam-model.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticated implements CanActivate {
  constructor(private model: SamModelService, private router: Router) {

  }
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(!this.model.signedIn) {
    	this.router.navigate(['/']);
    }
    return this.model.signedIn;
  }
}