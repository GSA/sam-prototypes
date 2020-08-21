import { Component, OnInit, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { SdsSearchModule } from '@gsa-sam/components';

@Component({
  selector: 'app-wages-landing',
  templateUrl: './wages-landing.component.html',
  styleUrls: ['./wages-landing.component.scss']
})
export class WagesLandingComponent implements OnInit, OnChanges {

  public model: {};

  public searchSettings = {
    size: 'large'
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search() {
      console.log('Searching...');
      this.router.navigate(['/search/results'], { queryParams: { index: 'wages' } });
  }

  ngOnChanges() {
      console.log('Searching...');
      this.router.navigate(['/search/results'], { queryParams: { index: 'wages' } });
  }

}
