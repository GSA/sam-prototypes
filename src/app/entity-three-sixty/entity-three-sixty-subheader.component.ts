import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationLink, NavigationMode } from '@gsa-sam/components';

@Component({
  selector: 'entity-three-sixty-subheader',
  template: `
  	<sds-subheader>
      <back-button></back-button>
	  <subheader-title title="Entity 360"></subheader-title>
    <ng-container subheader-buttongroup-container>
        <sds-button-group [mode]="'radio'" class="sds-button-group sds-button-group--secondary" (change)="subpageClicked($event)">
           <sds-button-group-option *ngFor="let page of subpages" [value]="page.id" [checked]="page.selected" [aria-label]="'page.text'">
              {{page.text}}
           </sds-button-group-option>
        </sds-button-group>
    </ng-container>
	  <sds-subheader-actions [model]="actionsModel" (clicks)="actionClicked($event)">
      </sds-subheader-actions>
    </sds-subheader>
  `
})
export class EntityThreeSixtySubheaderComponent implements OnInit {


  @Output() download: EventEmitter<any> = new EventEmitter();

  id: string;

  public subpages: NavigationLink[] = [
	    { text: 'Edit', id: 'edit', route: 'form', queryParams: {}, mode: NavigationMode.INTERNAL, selected: false },
        { text: 'Review', id: 'review', route: 'review', queryParams: {}, mode: NavigationMode.INTERNAL, selected: false },
	    { text: 'Preview', id: 'preview', route: 'preview', queryParams: {}, mode: NavigationMode.INTERNAL, selected: true }
    ];

  public actionsModel = {
    actions: [
      { id: 'download', icon: 'bars', text: 'Download' }
    ]
  };

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.url.subscribe(
      url => this.id = url[0].path
    );
  }

  subpageClicked($event) {
    console.log($event);

    if($event.value == 'review' ) {
      this.router.navigate(['/entity-registration/editor', this.id, 'review']);
    } else if ($event.value == 'edit') {
      this.router.navigate(['/entity-registration/editor', this.id, 'edit']);
    } else if ($event.value == 'preview') {
      this.router.navigate(['/entity360', this.id, 'registration']);
    }
  }

  actionClicked(buttonId) {
    if (buttonId == 'download') {
      this.download.emit(null);
    }
  }

}
