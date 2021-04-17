import { Injectable, Output, EventEmitter } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { SideNavigationModel } from '@gsa-sam/components';
import { Observable, of, BehaviorSubject } from 'rxjs';


import { user } from './user.data';
import { workspaceNavigationData } from './workspace-navigation.data';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _signedIn: boolean = false;
  private _user = user;
  private _workspaceMenu = workspaceNavigationData;

  public backButtonTest: (route: ActivatedRouteSnapshot) => boolean;

  get workspaceMenu(): SideNavigationModel {
  	return this._workspaceMenu;
  }

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

  getEmailSettings(): Observable<any[]> {
      return of(this.user.emailSettings);
  }

  getFollowings(): Observable<any[]> {
      return of(this.user.followings);
  }

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
