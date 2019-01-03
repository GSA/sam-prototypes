import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sam-feature-banner',
  templateUrl: './sam-feature-banner.component.html',
  styleUrls: ['./_styles.scss']
})
export class SamFeatureBannerComponent implements OnInit {

  @Input() title: string;
  @Input() featureImage: string;

  constructor() { }

  ngOnInit() {

  }
}
