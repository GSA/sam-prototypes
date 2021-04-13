import { Injectable, Output, EventEmitter } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { user } from './user.data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _signedIn: boolean = false;
  private _user = user;

  public backButtonTest: (route: ActivatedRouteSnapshot) => boolean;

  /**
   * event for event based
   */
  get user(): any {
  	return this._user;
  }

  public signInChange$ = new BehaviorSubject<boolean>(false);
  
  get signedIn(): boolean {
    return this._signedIn;
  }

  constructor(public router: Router) { }

  signIn(redirectUrl?: string) {
    this._signedIn = true;
    this.signInChange$.next(true);
    if (redirectUrl) {
      this.router.navigateByUrl(redirectUrl);
    } else {
      this.router.navigateByUrl('/workspace');
    }
  }

  signOut(redirectUrl?: string) {
    this._signedIn = false;
    this.signInChange$.next(false);
    if (!redirectUrl) {
      this.router.navigateByUrl('/');
    } else {
      this.router.navigateByUrl(redirectUrl);
    }
  }
}
