import { Component, OnInit, Input } from '@angular/core';
import { ToolItem } from '../tool-item';
import { SamModelService } from '../../../model/sam-model.service';

@Component({
  selector: 'sam-vertical-toolbar',
  templateUrl: './sam-vertical-toolbar.component.html',
  styleUrls: ['./_styles.scss', './_structure.scss']
})
export class SamVerticalToolbarComponent implements OnInit {

  @Input() tools: ToolItem[];

  model: SamModelService;

  constructor(model: SamModelService) {
  	this.model = model;
  }

  ngOnInit() {
  }

}
