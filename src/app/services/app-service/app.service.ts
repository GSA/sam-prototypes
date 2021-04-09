import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _signedIn: boolean = false;

  /**
   * event for event based
   */
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
