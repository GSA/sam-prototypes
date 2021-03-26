import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _signedIn: boolean = false;

  /**
   * event for event based
   */
  @Output()
  signedInEvent = new EventEmitter<boolean>();
  
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
