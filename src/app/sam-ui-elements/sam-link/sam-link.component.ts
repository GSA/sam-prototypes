import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sam-link',
  templateUrl: './sam-link.component.html',
  styleUrls: ['./sam-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SamLinkComponent implements OnInit {

  @Input() title: string;
  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }

}
