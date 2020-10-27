import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'assistance-result',
  templateUrl: './assistance-result.component.html',
  styleUrls: ['./assistance-result.component.scss']
})
export class AssistanceResultComponent implements OnInit {
  
  @Input() model: any;
  
  constructor() { }

  ngOnInit() {
  }

}
