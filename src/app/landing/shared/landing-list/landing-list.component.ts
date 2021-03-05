import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'landing-list',
  templateUrl: './landing-list.component.html',
  styleUrls: ['./landing-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingListComponent implements OnInit {

  @Input() links: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
