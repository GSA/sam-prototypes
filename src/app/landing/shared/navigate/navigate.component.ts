import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { INavigationLink, NavigationMode } from '@gsa-sam/components';

@Component({
  selector: 'navigate',
  template: `
	  <div (click)="navigate(item)">
		<ng-content></ng-content>
	  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigateComponent implements OnInit {

  @Input() item: INavigationLink;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  navigate(item: INavigationLink) {
    /*** It's generally considered bad practice to call window directly.  Some people implement a service to wrap this type of functionality. For now, I've created this component to isolate calling window.open to single reusable component.
    ***/
    if(item.mode == NavigationMode.EXTERNAL) {
  		window.open(item.route, '_blank');
    } else {
    	this.router.navigate([item.route]);
    }
  }

}
