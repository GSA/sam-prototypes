import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationLink, NavigationMode } from '@gsa-sam/components';

@Component({
  selector: 'entity-registration-editor-subheader',
  template: `
  	<sds-subheader>
      <back-button></back-button>
	  <subheader-title title="Entity Registration"></subheader-title>
    <ng-container subheader-buttongroup-container>
        <sds-button-group [mode]="'radio'" class="sds-button-group sds-button-group--secondary" (change)="subpageClicked($event)">
           <sds-button-group-option *ngFor="let page of subpages" [value]="page.id" [checked]="page.selected" [aria-label]="'page.text'">
              {{page.text}}
           </sds-button-group-option>
        </sds-button-group>
    </ng-container>
	  <ng-container subheader-buttons-container>
        	<button class="usa-button usa-button--secondary">Cancel</button>
			<button class="usa-button">Submit</button>
      </ng-container>
	  <sds-subheader-actions [model]="actionsModel" (clicks)="actionClicked($event)">
      </sds-subheader-actions>
    </sds-subheader>
  `
})
export class EntityRegistrationEditorSubheaderComponent implements OnInit {

  @Output() download: EventEmitter<any> = new EventEmitter();

  id: string;

  public subpages: NavigationLink[] = [
	    { text: 'Edit', id: 'edit', route: 'form', queryParams: {}, mode: NavigationMode.INTERNAL, selected: false },
        { text: 'Review', id: 'review', route: 'review', queryParams: {}, mode: NavigationMode.INTERNAL, selected: false },
	    { text: 'Preview', id: 'preview', route: 'preview', queryParams: {}, mode: NavigationMode.INTERNAL, selected: false }
    ];

  public actionsModel = {
    actions: [
      { id: 'download', icon: 'bars', text: 'Download' }
    ]
  };

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.url.subscribe(
      url => {
          this.id = url[0].path;
          this.setSelectedSubpage(this.route.snapshot.firstChild.url[0].path);
      }
    );
  }

  setSelectedSubpage(id: string) {
      for(let i=0; i<this.subpages.length; i++) {
          if(this.subpages[i].id == id) {
             this.subpages[i].selected = true;
          } else {
             this.subpages[i].selected = false;
          }
      }
  }

  subpageClicked($event) {
    console.log($event);
    let route: string = null;
    let queryParams: any = null;
    for(let i=0; i<this.subpages.length; i++) {
       if(this.subpages[i].id == $event.value) {
          route = this.subpages[i].route;
          if(this.subpages[i].queryParams)
          queryParams = this.subpages[i].queryParams;
       }
    }

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
