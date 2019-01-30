import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { SamFeatureBannerComponent } from '../sam-ui-elements/sam-feature-banner/sam-feature-banner.component';
import { SamDomain } from '../model/sam-domain';
import { SamModelService } from '../model/sam-model.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./_styles.scss']
})
export class HomeComponent implements AfterViewInit, OnInit {

  @ViewChild('overview') overviewTab: ElementRef;
  @ViewChild('entities') entitiesTab: ElementRef;
  @ViewChild('contracting') contractingTab: ElementRef;
  @ViewChild('assistance') assistanceTab: ElementRef;
  @ViewChild('hierarchy') hierarchyTab: ElementRef;
  @ViewChild('wages') wagesTab: ElementRef;
  @ViewChild('more') moreTab: ElementRef;

  domain: SamDomain = {
    title: 'All Data',
    key: 'all',
    placeholder: 'Search All Data'
  }

  selectedTab: ElementRef;
  constructor(private router: Router, public model: SamModelService) {
  }

  ngOnInit() {
  }

  navigateTo(route: string) {
  	this.router.navigateByUrl(route);
  }

  ngAfterViewInit()
  {
        setTimeout(() => {
            this.selectedTab = this.entitiesTab;
        });
  }
}
