import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { SamModelService } from '../../model/sam-model.service';

@Component({
  selector: 'app-opportunities-landing-federal',
  templateUrl: './opportunities-landing-federal.component.html',
  styleUrls: ['./opportunities-landing-federal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OpportunitiesLandingFederalComponent implements OnInit {

  public searchModel: {};

  public searchSettings = {
    size: 'large',
    placeholder: 'Enter an ID or keyword'
  }

  constructor(private router: Router, public model: SamModelService) { }

  ngOnInit() {
  }

  search() {
     this.router.navigate(['/search/results'], { queryParams: { index: 'opportunities', keyword: 'hello' } });
  }

}
