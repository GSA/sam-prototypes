import {
  ViewChild,
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnChanges
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
  NavigationEnd
} from '@angular/router';


import { filter, map } from 'rxjs/operators';

import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';
import { aboutSideNavigationData } from '../navigation/navigation.data';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PoliciesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private change: ChangeDetectorRef
  ) {

  }
  @ViewChild('sideNav', {static: true}) sideNav;

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let itemCode = 'sideId';
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
        this.sideNav.select(customData);
      });

  }

  ngAfterViewInit() {
    this.change.detectChanges(); 
  }

  public sideNavModel: SideNavigationModel = aboutSideNavigationData;

}
