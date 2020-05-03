import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { SamModelService } from '../model/sam-model.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'sam-databank',
  templateUrl: './databank.component.html',
  styleUrls: ['./databank.component.scss']
})
export class DatabankComponent implements OnInit {

    domain: string;
    page: string;

    public subheader = {
        buttons: [],
        actions: [
          { id: 'DownloadBtn', icon: 'bars', text: 'Download' }
        ]
  };

  constructor(private route: ActivatedRoute, private router: Router, public model: SamModelService) { 
  }

  ngOnInit() {
      this.domain = this.route.snapshot.queryParamMap.get('domain');
      this.route.queryParamMap.subscribe(queryParams => {
        this.domain = queryParams.get('domain');
        if(!this.domain) {
          this.domain = 'all';
        }
      });
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          this.page = this.router.url.split('/').pop();
        })
      );
  }

  selectPage(page) {
      let path = (page == 'databank') ? "" : '/' + page;
      this.router.navigateByUrl('/databank' + path);
  }

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }

}
