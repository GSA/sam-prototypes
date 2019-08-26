import { Component, OnInit, Input } from '@angular/core';

import { SamModelService } from '../model/sam-model.service';

@Component({
  selector: 'sam-help',
  templateUrl: './help.component.html',
  styleUrls: ['./_styles.scss']
})
export class HelpComponent implements OnInit {

  constructor(public model: SamModelService) {  
  }

  ngOnInit() {}

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
}
