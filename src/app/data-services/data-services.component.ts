import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SamModelService } from '../model/sam-model.service';

@Component({
  selector: 'data-services',
  templateUrl: './data-services.component.html',
  styleUrls: ['./_styles.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DataServicesComponent implements OnInit {

  domain: string;

  constructor(private route: ActivatedRoute, public model: SamModelService) {  
  }

  ngOnInit() {
      this.domain = this.route.snapshot.queryParamMap.get('domain');
      this.route.queryParamMap.subscribe(queryParams => {
        this.domain = queryParams.get('domain');
        if(!this.domain) {
          this.domain = 'all';
        }
      });
  }

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }

}