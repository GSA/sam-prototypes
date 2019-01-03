import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sam-branding',
  templateUrl: './sam-branding.component.html',
  styleUrls: ['./_styles.scss', './_structure.scss']
})
export class SamBrandingComponent implements OnInit {

  @Input() logoImage: string;

  constructor() { }

  ngOnInit() {
  }

}
