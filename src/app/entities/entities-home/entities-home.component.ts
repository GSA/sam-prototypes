import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SamDomain } from '../../model/sam-domain';

@Component({
  selector: 'entities-home',
  templateUrl: './entities-home.component.html',
  styleUrls: ['./_styles.scss']
})
export class EntitiesHomeComponent implements OnInit {

  domain: SamDomain = {
    title: 'Entity Information',
    key: 'entities',
    placeholder: 'Search Entity Information'
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(url: string) {
		this.router.navigateByUrl(url);
  }

}
