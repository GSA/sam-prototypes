import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'landing-accordion',
  templateUrl: './landing-accordion.component.html',
  styleUrls: ['./landing-accordion.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingAccordionComponent implements OnInit {

  @Input() items: any[];

  multi: boolean = true;

  constructor() { }

  ngOnInit(): void {
      console.log('Initializing accordion...');
  }

}
