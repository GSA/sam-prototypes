import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { SamModelService } from '../model/sam-model.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./_styles.scss']
})
export class HomeComponent implements AfterViewInit, OnInit {

  constructor(private router: Router, public model: SamModelService) {
  }

  ngOnInit() {
  }

  navigateTo(route: string) {
  	this.router.navigateByUrl(route);
  }

  ngAfterViewInit()
  {
  }
}
