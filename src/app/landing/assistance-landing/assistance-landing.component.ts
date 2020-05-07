import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assistance-landing',
  templateUrl: './assistance-landing.component.html',
  styleUrls: ['./assistance-landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssistanceLandingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search(searchTerm) {
     this.router.navigate(['/search/results'], { queryParams: { index: 'assistancelist', keyword: searchTerm } });
  }

}
