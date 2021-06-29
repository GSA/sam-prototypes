import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationLink } from '@gsa-sam/components';

@Component({
  selector: 'data-entry-subheader',
  template: `
  	<sds-subheader>
      <back-button></back-button>
	  <subheader-title [title]="title"></subheader-title>
    <ng-container subheader-buttongroup-container>
        <sds-button-group [mode]="'radio'" class="sds-button-group sds-button-group--secondary" (change)="subpageClicked($event)">
           <sds-button-group-option *ngFor="let page of subpages" [value]="page.id" [checked]="page.selected" [aria-label]="'page.text'">
              {{page.text}}
           </sds-button-group-option>
        </sds-button-group>
    </ng-container>
	  <ng-container subheader-buttons-container>
        <ng-content select="button"></ng-content>
      </ng-container>
	  <sds-subheader-actions [model]="actionsModel" (clicks)="actionClicked($event)">
      </sds-subheader-actions>
    </sds-subheader>
  `
})
export class DataEntrySubheaderComponent implements OnInit {

  @Input() title: string;

  @Input() subpages: NavigationLink[];

  @Output() download: EventEmitter<any> = new EventEmitter();

  url: string;

  @Output() subpageEventClicked: EventEmitter<any> = new EventEmitter();

  public actionsModel = {
    actions: [
      { id: 'download', icon: 'bars', text: 'Download' }
    ]
  };

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent.url.subscribe(
      url => this.url = url[0].path
    );
  }

  ngOnchanges(changes: SimpleChanges) {
    console.log(changes); // here you will get the data from parent once the input param is change
  }

  subpageClicked($event) {
    // console.log($event);
    // let route: string = null;
    // let queryParams: any = null;
    // for(let i=0; i<this.subpages.length; i++) {
    //    if(this.subpages[i].id == $event.value) {
    //       route = this.subpages[i].route;
    //       if(this.subpages[i].queryParams)
    //       queryParams = this.subpages[i].queryParams;
    //    }
    // }

    // if(route) {
    //   this.router.navigate([route], { relativeTo: this.route });
    // }
    this.subpageEventClicked.emit($event.value);
  }

  actionClicked(buttonId) {
    if (buttonId == 'download') {
      this.download.emit(null);
    }
  }

}
