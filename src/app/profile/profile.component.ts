import { Component, OnInit } from '@angular/core';
import { SamModelService } from '../model/sam-model.service';

@Component({
  selector: 'sam-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./_styles.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public model: SamModelService) { 
  	  this.model.setMainNavigationVisible(false);
  }

  ngOnInit() {
  }

}
