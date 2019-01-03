import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-sam-megamenu',
  templateUrl: './sam-megamenu.component.html',
  styleUrls: ['./_styles.scss']
})
export class SamMegamenuComponent implements OnInit {

  @Input() menuItems: MenuItem[];

  constructor() { }

  ngOnInit() {
  }

}
