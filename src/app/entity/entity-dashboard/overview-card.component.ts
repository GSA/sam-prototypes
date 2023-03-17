import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'overview-card',
  templateUrl: './overview-card.component.html'
})
export class OverviewCardComponent implements OnInit {

  @Input() status: string;
  @Input() title: string;
  @Input() startLink: string;

  constructor() { }

  ngOnInit(): void {
  }

}
