import { Component, OnInit, Input } from '@angular/core';
import { SamNav } from '../model/sam-nav';
import { SamModelService } from '../../model/sam-model.service';

@Component({
  selector: 'sam-sidebar',
  templateUrl: './sam-sidebar.component.html',
  styleUrls: ['./_style.scss']
})
export class SamSidebarComponent implements OnInit {

  @Input() title: string;
  @Input() navList: SamNav[];

  constructor(public model: SamModelService) { 
  }

  ngOnInit() {
  }

}
