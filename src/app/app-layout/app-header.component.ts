import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from "@angular/core";
import { LocationStrategy } from "@angular/common";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { filter, map } from "rxjs/operators";
import { NavigationMode } from "@gsa-sam/components";
import { AppService } from "../services/app-service/app.service";
import { UsaHeaderComponent } from "@gsa-sam/ngx-uswds";

@Component({
  selector: "app-header",
  template: `
    <div class="bg-black padding-05">
      <div class="grid-container text-base-light font-sans-3xs">
        <div class="grid-row">
          <div class="grid-fill">
            This Website is a prototype intended to support usability testing
            only.
          </div>
        </div>
      </div>
    </div>
    <!-- <select (change)="swapTheme($event)">
      <option value="sds">SDS</option>
      <option value="uswds">USWDS</option>
    </select> -->
    <usa-header #header
      [primaryNavItems]="model.navigationLinks" 
      [secondaryNavItems]="model.secondaryLinks"
      [title]="headerLogo"
      [extended]="true"
      (linkEvent)="menuItemSelected($event)"
    >
      <ng-template #headerLogo>
        <div class="sds-navbar--blank" *ngIf="isHomePage; else showLogo"></div>
        <ng-template #showLogo>
          <a [routerLink]="model.home.route" title="Home" aria-label="Go to Home page" *ngIf="!isHomePage">
            <img class="height-5" [src]="model.home.logo" [alt]="model.home.text" />
          </a>
        </ng-template>
      </ng-template>

      <ng-template usaHeaderSecondaryLinkTemplate let-link>
        <a [attr.id]="link.id" (click)="menuItemSelected(link)" [attr.href]="'javascript:void(0);'"
          [ngClass]="{'usa-current': link.selected}">
          <div class="sds-stack sds-sm">
            <usa-icon class="sds-stack-icon text-ink" [icon]="link.imageClass"></usa-icon>
            <usa-icon *ngIf="link.hasCounter" class="sds-stack-icon" [icon]="'circle-fill'" [size]="'xs'"
              [classes]="['counter-icon']"></usa-icon>
          </div>
          <span class="sds-nav__secondary-item-text">{{ link.text }}</span>
        </a>
      </ng-template>
    </usa-header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeaderComponent implements OnInit {
  isHomePage: boolean = true;
  @ViewChild("header", { static: true }) header: UsaHeaderComponent;

  model: any;

  signInItem = {
    imageClassPrefix: "sds",
    imageClass: "logIn",
    mode: NavigationMode.EVENT,
    text: "Sign In",
    route: "/workspace",
    id: "signin",
  };

  secondaryLinksSignedIn = [
    {
      imageClassPrefix: "sds",
      imageClass: "request",
      mode: NavigationMode.INTERNAL,
      text: "Requests",
      route: "/requests",
      id: "request",
      hasCounter: true,
      selected: true,
    },
    {
      imageClassPrefix: "sds",
      imageClass: "messages",
      text: "Notifications",
      route: "/notifications",
      mode: NavigationMode.INTERNAL,
      id: "notifications",
    },
    {
      imageClassPrefix: "sds",
      imageClass: "workspace",
      imageAltText: "Workspace Icon",
      mode: NavigationMode.INTERNAL,
      text: "Workspace",
      route: "/workspace",
      id: "workspace",
    },
    {
      imageClassPrefix: "sds",
      imageClass: "log-out",
      mode: NavigationMode.EVENT,
      text: "Sign Out",
      route: "/signout",
      id: "signout",
    },
  ];

  styleSheetLink: HTMLLinkElement;

  constructor(
    public appService: AppService,
    public router: Router,
    public route: ActivatedRoute,
    public locationStrategy: LocationStrategy,
    private cdr: ChangeDetectorRef
  ) {
    this.styleSheetLink = document.querySelector(
      'link[id="selected-style"]'
    );

    this.appService.signInChange$.subscribe((value) => {
      this.signInOutEvent(value);
    });

    this.model = {
      secondaryLinks: [this.signInItem],
      navigationLinks: [
        {
          text: "Home",
          id: "home",
          children: [
            { text: "Home Page", mode: NavigationMode.INTERNAL, route: "/" },
            {
              text: "Entity Information",
              mode: NavigationMode.INTERNAL,
              route: "/home/entity-information",
            },
            {
              text: "Entity Registration",
              mode: NavigationMode.INTERNAL,
              route: "/home/registration",
            },
            {
              text: "Contract Opportunities",
              mode: NavigationMode.INTERNAL,
              route: "/home/opportunities",
            },
            {
              text: "Contract Data",
              mode: NavigationMode.INTERNAL,
              route: "/home/entity-registration",
            },
            {
              text: "Entity Compliance",
              mode: NavigationMode.INTERNAL,
              route: "/home/compliance",
            },
            {
              text: "Federal Hierarchy",
              mode: NavigationMode.INTERNAL,
              route: "/home/hierarchy",
            },
            {
              text: "Assistance Listings",
              mode: NavigationMode.INTERNAL,
              route: "/home/assistance",
            },
          ],
        },
        {
          text: "Search",
          route: "/search/search-home",
          mode: NavigationMode.INTERNAL,
          id: "search",
        },
        {
          text: "Databank",
          route: "/databank",
          mode: NavigationMode.INTERNAL,
          id: "databank",
        },
        {
          text: "Data Services",
          route: "/dataservices",
          mode: NavigationMode.INTERNAL,
          id: "dataService",
        },
        {
          text: "Help",
          route: "/help",
          mode: NavigationMode.INTERNAL,
          id: "help",
        },
      ],
      home: {
        text: "Home",
        logo: this.locationStrategy.getBaseHref() + "assets/img/logo-sam.svg",
        route: "/",
        id: "home",
        mode: NavigationMode.INTERNAL,
      },
    };
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map((event: NavigationEnd) => {
          this.isHomePage = event.url == "/";
          let itemCode = "id";
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
        this.cdr.detectChanges();
        this.header.changeDetector.detectChanges();
      });
  }

  signInOutEvent(signedIn: boolean) {
    if (!this.model) {
      return;
    }
    if (signedIn) {
      this.model.secondaryLinks = this.secondaryLinksSignedIn;
    } else {
      this.model.secondaryLinks = [this.signInItem];
    }
  }

  menuItemSelected(link) {
    if (link.id == "signin") {
      this.appService.signIn();
    } else if (link.id == "signout") {
      this.appService.signOut();
    }

    this.router.navigateByUrl(link.route);
  }

  swapTheme(e){
    this.styleSheetLink.setAttribute('href', `${e.target.value}.css`);
  }
}
