import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'landing-list',
  templateUrl: './landing-list.component.html',
  styleUrls: ['./landing-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
