import { Component, OnInit, Input } from '@angular/core';
import { INavigationLink } from '@gsa-sam/components';

@Component({
  selector: 'data-entry-side-nav',
  templateUrl: './data-entry-side-nav.component.html'
})
export class DataEntrySideNavComponent implements OnInit {

  @Input() links: INavigationLink;

  selectedLink: INavigationLink;

  constructor() { }

  ngOnInit(): void {
    this.selectedLink = (this.links) ? this.links[0] : null;
  }

}
