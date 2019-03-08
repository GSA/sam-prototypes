import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { SamDomain } from '../../model/sam-domain';

@Component({
  selector: 'sam-search-input',
  templateUrl: './sam-search-input.component.html',
  styleUrls: ['./_styles.scss']
})
export class SamSearchInputComponent implements OnInit {

  @Input() domain: string;

  constructor(private router: Router) { 
  }

  ngOnInit() {  	
  }

  onSearch(searchText: string) {
		  this.router.navigateByUrl('/search?domain=' + this.domain + '&keyword=' + searchText);
  }

}
