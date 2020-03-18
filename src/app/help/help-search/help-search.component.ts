import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit } from '@angular/core';

import { HelpService } from '../service/help.service';

@Component({
  selector: 'app-help-search',
  templateUrl: './help-search.component.html',
  styleUrls: ['./help-search.component.scss']
})
export class HelpSearchComponent implements OnInit, AfterViewInit {

  constructor(private change: ChangeDetectorRef, public service: HelpService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {      
    this.change.detectChanges();
  }

}
