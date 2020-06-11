import {
  ViewChild,
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  AfterViewInit,
  ChangeDetectionStrategy,
  OnChanges
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  UrlSegment,
  NavigationStart,

} from '@angular/router';


import { filter, map } from 'rxjs/operators';

import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';
import { aboutSideNavigationData } from './navigation/navigation.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {

  navId: string;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private change: ChangeDetectorRef
  ) {

  }
  @ViewChild('sideNav', {static: true}) sideNav;

  ngOnInit() {

    this.router.events.subscribe((e) => {
        if(e instanceof NavigationEnd) {
           let navId = e.url.split('/').pop();
           if(navId && navId != this.navId) {
              this.navId = navId;
              this.sideNav.select(this.navId);
           }
        }
    });
  }

  ngAfterViewInit() {
    this.change.detectChanges(); 
  }

  public sideNavModel: SideNavigationModel = aboutSideNavigationData;

}
