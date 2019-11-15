import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SamModelService } from '../model/sam-model.service';

@Component({
  selector: 'sam-databank',
  templateUrl: './databank.component.html',
  styleUrls: ['./databank.component.scss']
})
export class DatabankComponent implements OnInit {

    domain: string;

    public subheader = {
        buttons: [],
        actions: [
          { id: 'DownloadBtn', icon: 'bars', text: 'Download' }
        ]
  };

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
