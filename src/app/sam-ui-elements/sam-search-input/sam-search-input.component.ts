import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { SamDomain } from '../../model/sam-domain';

@Component({
  selector: 'sam-search-input',
  templateUrl: './sam-search-input.component.html',
  styleUrls: ['./_styles.scss']
})
export class SamSearchInputComponent implements OnInit {

  @Input() selectedDomain: SamDomain;
  @Input() domains: SamDomain[];
  domainKey: string = 'all';

  constructor(private router: Router) { 
  }

  ngOnInit() {  	
  }

  selectDomain(selectEvent: any) {
    this.domainKey = selectEvent.currentTarget.value;
  }

  onSearch(searchText: string) {
		  this.router.navigateByUrl('/search?domain=' + this.domainKey);
  }

}
