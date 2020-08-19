import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { SdsSearchModule } from '@gsa-sam/components';

@Component({
  selector: 'app-wages-landing',
  templateUrl: './wages-landing.component.html',
  styleUrls: ['./wages-landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WagesLandingComponent implements OnInit {

  public model: {};

  public searchSettings = {
    size: 'large'
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search() {
      this.router.navigate(['/search/results'], { queryParams: { index: 'wages' } });
  }

}
