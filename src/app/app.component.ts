import { Component, ElementRef, ViewChild, HostListener } from "@angular/core";
import {
  NavigationStart,
  Router,
  ActivatedRoute,
  NavigationEnd
} from "@angular/router";
import { SamModelService } from "./model/sam-model.service";
import { filter, map } from "rxjs/operators";
import { LocationStrategy } from '@angular/common';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "sam-gov";
  sectionId: string = "home";
  signedIn: boolean = false;

  @ViewChild("header") header;

  public constructor(
    private route: ActivatedRoute,
    private router: Router,
    private locationStrategy: LocationStrategy,
    public modelService: SamModelService
  ) { }
  setSelection() { }

  ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let itemCode = 'id';
          let child = this.route.firstChild;
          let searchedValue = null;
          if (this.route.snapshot.data && this.route.snapshot.data[itemCode]) {
            searchedValue = this.route.snapshot.data[itemCode];
          }
          while (child) {
            if (child.snapshot.data && child.snapshot.data[itemCode]) {
              searchedValue = child.snapshot.data[itemCode];
            }
            if (child.firstChild) {
              child = child.firstChild;
            } else {
              child = null;
            }
          }
          return searchedValue;
        })
      )
      .subscribe((customData: any) => {
        this.sectionId = customData;
        // this.header.select(customData);
      });
  }

  ngAfterViewInit() { }

  signIn() {
    this.signedIn = true;
    this.navigateTo('/workspace');
  }

  signOut() {
    this.signedIn = false;
    this.navigateTo('/');
  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }

  @ViewChild('usaNavOpen') openNavBtn: ElementRef;
  @ViewChild('usaNavClose') closeNavBtn: ElementRef;
  mobileNavActive = false;


  // When the mobile nav is active, and the close box isn't visible,
  // we know the user's viewport has been resized to be larger.
  // Let's make the page state consistent by deactivating the mobile nav.
  @HostListener('window:resize', ['$event'])
  onBrowserResize(event) {
    if (
      this.mobileNavActive &&
      this.closeNavBtn.nativeElement.getBoundingClientRect().width === 0
    ) {
      this.mobileNavActive = false;
    }
  }

  openMobileNav() {
    this.mobileNavActive = true;
  }

  closeMobileNav() {
    this.mobileNavActive = false;
    // The mobile nav was just deactivated, and focus was on the close
    // button, which is no longer visible. We don't want the focus to
    // disappear into the void, so focus on the menu button if it's
    // visible (this may have been what the user was just focused on,
    // if they triggered the mobile nav by mistake).
    this.openNavBtn.nativeElement.focus();
  }

  // The mobile nav was just activated, so focus on the close button,
  navAnimationEnd() {
    this.closeNavBtn.nativeElement.focus();
  }

  ngOnDestroy() { }
}
