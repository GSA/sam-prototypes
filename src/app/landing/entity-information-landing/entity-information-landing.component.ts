import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entity-information-landing',
  templateUrl: './entity-information-landing.component.html',
  styleUrls: ['./entity-information-landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntityInformationLandingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search(searchTerm) {
     this.router.navigate(['/search/results'], { queryParams: { index: 'entityinfo', keyword: searchTerm } });
  }
}
