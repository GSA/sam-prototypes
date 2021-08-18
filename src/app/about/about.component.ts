import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { selectionPanelConfig } from './navigation/navigation.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  selectionPanelModel = selectionPanelConfig;

  constructor(public router: Router) {}

  ngOnInit() {
  }

  navigateTo(navigationLink) {
    this.router.navigate([navigationLink.route]);
  }

}
