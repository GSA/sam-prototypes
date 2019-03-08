import { Component, OnInit } from '@angular/core';
import { SamModelService } from '../../model/sam-model.service';

@Component({
  selector: 'performance-data',
  templateUrl: './performance-data.component.html',
  styleUrls: ['./_styles.scss']
})
export class PerformanceDataComponent implements OnInit {


  constructor(public model: SamModelService) { 
  	  this.model.setMainNavigationVisible(false);
  }

  ngOnInit() {
  }

}
