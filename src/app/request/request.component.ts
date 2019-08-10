import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SamModelService } from '../model/sam-model.service';

@Component({
  selector: 'sam-request',
  templateUrl: './request.component.html',
  styleUrls: ['./_styles.scss']
})
export class RequestComponent implements OnInit {

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