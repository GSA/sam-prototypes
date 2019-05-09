// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate, CanActivateChild } from '@angular/router';
// import { Observable } from "rxjs/Rx"
// import { SamModelService } from '../model/sam-model.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class WorkspaceGuard implements CanActivate, CanActivateChild {
//   constructor(private model: SamModelService, private router: Router) {}
 
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
//     if(this.model.isSignedIn) {
//         return Observable.of(true);
//     }
//     this.router.navigate(['workspace/public']);
//     return Observable.of(false);
//   }

//   canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
//     return Observable.of(true);
//   } 
// }