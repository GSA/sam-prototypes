import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NavigationLink, NavigationMode } from '@gsa-sam/components';

@Component({
  selector: 'app-system-account-editor',
  templateUrl: './system-account-editor.component.html'
})
export class SystemAccountEditorComponent implements OnInit {

  model: any;
  id: string;

  public subpages: NavigationLink[] = [
      { text: 'Edit', id: 'edit', route: 'form', queryParams: {}, mode: NavigationMode.INTERNAL, selected: false },
      { text: 'Review', id: 'review', route: 'review', queryParams: {}, mode: NavigationMode.INTERNAL, selected: false }
    ];

  public actionsModel = {
    actions: [
      { id: 'download', icon: 'bars', text: 'Download' }
    ]
  };

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.url.subscribe(
      url => {
          this.id = (url && url.length > 0) ? url[0].path : null;
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

    if($event.value == 'review' && this.id == null) {
        this.router.navigate(['/system-accounts/editor/review']);
    } else if($event.value == 'edit' && this.id == null) {
        this.router.navigate(['/system-accounts/editor/edit']);
    } else if($event.value == 'review' && this.id != null) {
      this.router.navigate(['/system-accounts/editor', this.id, 'review']);
    } else if ($event.value == 'edit' &&this.id != null) {
      this.router.navigate(['/system-accounts/editor', this.id, 'edit']);
    }
  }

  actionClicked(buttonId) {
    if (buttonId == 'download') {
      
    }
  }

}