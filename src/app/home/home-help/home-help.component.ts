import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'home-help',
  templateUrl: './home-help.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeHelpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
