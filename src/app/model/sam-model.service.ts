import { Injectable, ElementRef } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { ToolItem } from '../sam-ui-elements/tools';
import { GlobalTools, SearchTools } from './tools.config';

@Injectable({
  providedIn: 'root'
})
export class SamModelService {

  /**
   * Sign in 
   */
  isSignedIn: boolean = false;

  isMainNavigationVisible: boolean = true;


  router: Router;
  domain: string;

  /**
   * Constructor
   */
  constructor(router: Router) {
      this.router = router;
      router.events.subscribe((event) => {
        if(event instanceof NavigationStart) {
          this.isMainNavigationVisible = true;
        }
      });
  }

  signIn(redirectUrl?: string) {
    this.isSignedIn = true;
    if(redirectUrl) {
      this.router.navigateByUrl(redirectUrl);
    }
  }

  signOut(redirectUrl?: string) {
    this.isSignedIn = false;
    if(redirectUrl) {
      this.router.navigateByUrl(redirectUrl);
    }
  }

  goTo(url: string) {
    this.router.navigateByUrl(url);
  }

  setMainNavigationVisible(isVisible: boolean) {
    this.isMainNavigationVisible = isVisible;
  }

}
