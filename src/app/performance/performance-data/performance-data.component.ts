import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, TemplateRef } from '@angular/core';
import { SamModelService } from '../../model/sam-model.service';
import { ToolItem } from '../../sam-ui-elements/tools/tool-item';
import { DataTools } from './performance.config';

@Component({
  selector: 'performance-data',
  templateUrl: './performance-data.component.html',
  styleUrls: ['./_styles.scss']
})
export class PerformanceDataComponent implements AfterViewInit, OnInit {

  @ViewChild('evaluation') evaluationTool: ElementRef;
  @ViewChild('history') historyTool: ElementRef;
  @ViewChild('download') downloadTool: ElementRef;

  constructor(public model: SamModelService) { 
  	  this.model.setMainNavigationVisible(false);
  	  this.model.setLocalTools(DataTools);
  }

  ngOnInit() {
  }

  loadTemplates() {
     this.model.setToolTemplate('evaluation', this.evaluationTool);
     this.model.setToolTemplate('history', this.historyTool);
     this.model.setToolTemplate('download', this.downloadTool);
     this.model.setSelectedTool(DataTools[0]);
  }

  ngAfterViewInit()
  {
        setTimeout(() => {
            this.loadTemplates();
        });
  }

}
