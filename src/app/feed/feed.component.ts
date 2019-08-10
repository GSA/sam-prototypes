import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SamModelService } from '../model/sam-model.service';

@Component({
  selector: 'sam-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./_styles.scss']
})
export class FeedComponent implements OnInit {

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

}