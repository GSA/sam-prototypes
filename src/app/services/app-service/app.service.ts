import { Injectable, Output, EventEmitter } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { user } from './user.data';

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
  @Output()
  signedInEvent = new EventEmitter<boolean>();

  get user(): any {
  	return this._user;
  }
  
  get signedIn(): boolean {
    return this._signedIn;
  }

  constructor(public router: Router) { }

  signIn(redirectUrl?: string) {
    this._signedIn = true;
    if (redirectUrl) {
      this.router.navigateByUrl(redirectUrl);
    } else {
      this.router.navigateByUrl('/workspace');
    }
    this.signedInEvent.emit(true);
  }

  signOut(redirectUrl?: string) {
    this._signedIn = false;
    if (!redirectUrl) {
      this.router.navigateByUrl('/');
    } else {
      this.router.navigateByUrl(redirectUrl);
    }
    this.signedInEvent.emit(false);
  }
}
