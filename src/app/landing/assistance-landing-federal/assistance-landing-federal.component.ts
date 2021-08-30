import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../services/app-service/app.service';
import {allIcons} from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-assistance-landing-federal',
  templateUrl: './assistance-landing-federal.component.html',
  styleUrls: ['./assistance-landing-federal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssistanceLandingFederalComponent implements OnInit {

  public searchModel: {};

  public searchSettings = {
    size: 'large',
    placeholder: 'Enter an CFDA number or keyword'
  }

  constructor(private router: Router, public service: AppService) { }

  ngOnInit() {
  }

  search() {
     this.router.navigate(['/search'], { queryParams: { index: 'assistancelist', keyword: 'hello' } });
  }

}
