import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { SamModelService } from '../../model/sam-model.service';

@Component({
  selector: 'app-assistance-landing',
  templateUrl: './assistance-landing.component.html',
  styleUrls: ['./assistance-landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssistanceLandingComponent implements OnInit {

  constructor(private router: Router, public model: SamModelService) { }

  ngOnInit() {
  }

  search(searchForm) {
     this.router.navigate(['/search/results'], { queryParams: { index: 'assistancelist' } });
  }

}
