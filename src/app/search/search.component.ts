import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, NavigationExtras } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

    domain: string;
    page: string;

  public subheaderActions = {
    buttons: [],
    actions: [
      { id: 'downloadAction', icon: 'bars', text: 'Download' },
      { id: 'saveAction', icon: 'bars', text: 'Save' },
      { id: 'saveAsAction', icon: 'bars', text: 'Save As' }
    ]
  };

  constructor(private route: ActivatedRoute, private router: Router) { 
  }

  ngOnInit() {
      this.domain = this.route.snapshot.queryParamMap.get('index');
      this.route.queryParamMap.subscribe(queryParams => {
        this.domain = queryParams.get('index');
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

  search(keyword) {
  	if(this.page != 'saved-search') {
	  	let navigationExtras: NavigationExtras = {
	      queryParams: { 'index': this.domain, 'keyword': keyword }
	    };

	    this.router.navigate(['/search/results'], navigationExtras);
  	}
  }

  selectPage(page) {
      let path = (page == 'search') ? "" : '/' + page;
      this.router.navigateByUrl('/search' + path);
  }

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
}