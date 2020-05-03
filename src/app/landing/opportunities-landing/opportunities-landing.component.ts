import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opportunities-landing',
  templateUrl: './opportunities-landing.component.html',
  styleUrls: ['./opportunities-landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OpportunitiesLandingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search(searchTerm) {
     this.router.navigate(['/search/results'], { queryParams: { index: 'opportunities', keyword: searchTerm } });
  }

}
